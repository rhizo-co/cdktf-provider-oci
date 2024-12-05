# `dataOciIdentityDomainsAuthenticationFactorSettings` Submodule <a name="`dataOciIdentityDomainsAuthenticationFactorSettings` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsAuthenticationFactorSettings <a name="DataOciIdentityDomainsAuthenticationFactorSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_settings oci_identity_domains_authentication_factor_settings}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAuthenticationFactorSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings(scope: Construct, id: string, config: DataOciIdentityDomainsAuthenticationFactorSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig">DataOciIdentityDomainsAuthenticationFactorSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig">DataOciIdentityDomainsAuthenticationFactorSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.resetAttributeSets">resetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAttributes` <a name="resetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetAttributeSets` <a name="resetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.resetAttributeSets"></a>

```typescript
public resetAttributeSets(): void
```

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.resetAuthorization"></a>

```typescript
public resetAuthorization(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.resetId"></a>

```typescript
public resetId(): void
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.resetResourceTypeSchemaVersion"></a>

```typescript
public resetResourceTypeSchemaVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsAuthenticationFactorSettings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.isConstruct"></a>

```typescript
import { dataOciIdentityDomainsAuthenticationFactorSettings } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.isTerraformElement"></a>

```typescript
import { dataOciIdentityDomainsAuthenticationFactorSettings } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.isTerraformDataSource"></a>

```typescript
import { dataOciIdentityDomainsAuthenticationFactorSettings } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.generateConfigForImport"></a>

```typescript
import { dataOciIdentityDomainsAuthenticationFactorSettings } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciIdentityDomainsAuthenticationFactorSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityDomainsAuthenticationFactorSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityDomainsAuthenticationFactorSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsAuthenticationFactorSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.authenticationFactorSettings">authenticationFactorSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.itemsPerPage">itemsPerPage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.startIndex">startIndex</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.totalResults">totalResults</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.attributeSetsInput">attributeSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.attributesInput">attributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.authorizationInput">authorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.attributes">attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `authenticationFactorSettings`<sup>Required</sup> <a name="authenticationFactorSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.authenticationFactorSettings"></a>

```typescript
public readonly authenticationFactorSettings: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList</a>

---

##### `itemsPerPage`<sup>Required</sup> <a name="itemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.itemsPerPage"></a>

```typescript
public readonly itemsPerPage: number;
```

- *Type:* number

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `startIndex`<sup>Required</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.startIndex"></a>

```typescript
public readonly startIndex: number;
```

- *Type:* number

---

##### `totalResults`<sup>Required</sup> <a name="totalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.totalResults"></a>

```typescript
public readonly totalResults: number;
```

- *Type:* number

---

##### `attributeSetsInput`<sup>Optional</sup> <a name="attributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.attributeSetsInput"></a>

```typescript
public readonly attributeSetsInput: string[];
```

- *Type:* string[]

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.attributesInput"></a>

```typescript
public readonly attributesInput: string;
```

- *Type:* string

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.idcsEndpointInput"></a>

```typescript
public readonly idcsEndpointInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.resourceTypeSchemaVersionInput"></a>

```typescript
public readonly resourceTypeSchemaVersionInput: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettings <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettings.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAuthenticationFactorSettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettings: dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettings = { ... }
```


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettings <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettings.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAuthenticationFactorSettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettings: dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettings = { ... }
```


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettings <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettings.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAuthenticationFactorSettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettings: dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettings = { ... }
```


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicy <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAuthenticationFactorSettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicy: dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicy = { ... }
```


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettings <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettings.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAuthenticationFactorSettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettings: dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettings = { ... }
```


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictions <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictions" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictions.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAuthenticationFactorSettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictions: dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictions = { ... }
```


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedBy <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAuthenticationFactorSettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedBy: dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedBy = { ... }
```


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedBy <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAuthenticationFactorSettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedBy: dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedBy = { ... }
```


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettings <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettings.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAuthenticationFactorSettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettings: dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettings = { ... }
```


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMeta <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMeta.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAuthenticationFactorSettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMeta: dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMeta = { ... }
```


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettings <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettings.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAuthenticationFactorSettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettings: dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettings = { ... }
```


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTags <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTags.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAuthenticationFactorSettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTags: dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTags = { ... }
```


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactor <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactor" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactor"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactor.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAuthenticationFactorSettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactor: dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactor = { ... }
```


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettings <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettings.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAuthenticationFactorSettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettings: dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettings = { ... }
```


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAuthenticationFactorSettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings: dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings = { ... }
```


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAuthenticationFactorSettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings: dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings = { ... }
```


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAuthenticationFactorSettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings: dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings = { ... }
```


### DataOciIdentityDomainsAuthenticationFactorSettingsConfig <a name="DataOciIdentityDomainsAuthenticationFactorSettingsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAuthenticationFactorSettings } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsAuthenticationFactorSettingsConfig: dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_settings#idcs_endpoint DataOciIdentityDomainsAuthenticationFactorSettings#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.property.attributes">attributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_settings#attributes DataOciIdentityDomainsAuthenticationFactorSettings#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_settings#attribute_sets DataOciIdentityDomainsAuthenticationFactorSettings#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.property.authorization">authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_settings#authorization DataOciIdentityDomainsAuthenticationFactorSettings#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_settings#compartment_id DataOciIdentityDomainsAuthenticationFactorSettings#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_settings#id DataOciIdentityDomainsAuthenticationFactorSettings#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_settings#resource_type_schema_version DataOciIdentityDomainsAuthenticationFactorSettings#resource_type_schema_version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_settings#idcs_endpoint DataOciIdentityDomainsAuthenticationFactorSettings#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_settings#attributes DataOciIdentityDomainsAuthenticationFactorSettings#attributes}.

---

##### `attributeSets`<sup>Optional</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_settings#attribute_sets DataOciIdentityDomainsAuthenticationFactorSettings#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_settings#authorization DataOciIdentityDomainsAuthenticationFactorSettings#authorization}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_settings#compartment_id DataOciIdentityDomainsAuthenticationFactorSettings#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_settings#id DataOciIdentityDomainsAuthenticationFactorSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsConfig.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_settings#resource_type_schema_version DataOciIdentityDomainsAuthenticationFactorSettings#resource_type_schema_version}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAuthenticationFactorSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAuthenticationFactorSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.property.helpDeskCodeExpiryInMins">helpDeskCodeExpiryInMins</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.property.helpDeskGenerationEnabled">helpDeskGenerationEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.property.helpDeskMaxUsage">helpDeskMaxUsage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.property.length">length</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.property.maxActive">maxActive</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.property.selfServiceGenerationEnabled">selfServiceGenerationEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettings">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `helpDeskCodeExpiryInMins`<sup>Required</sup> <a name="helpDeskCodeExpiryInMins" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.property.helpDeskCodeExpiryInMins"></a>

```typescript
public readonly helpDeskCodeExpiryInMins: number;
```

- *Type:* number

---

##### `helpDeskGenerationEnabled`<sup>Required</sup> <a name="helpDeskGenerationEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.property.helpDeskGenerationEnabled"></a>

```typescript
public readonly helpDeskGenerationEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `helpDeskMaxUsage`<sup>Required</sup> <a name="helpDeskMaxUsage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.property.helpDeskMaxUsage"></a>

```typescript
public readonly helpDeskMaxUsage: number;
```

- *Type:* number

---

##### `length`<sup>Required</sup> <a name="length" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.property.length"></a>

```typescript
public readonly length: number;
```

- *Type:* number

---

##### `maxActive`<sup>Required</sup> <a name="maxActive" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.property.maxActive"></a>

```typescript
public readonly maxActive: number;
```

- *Type:* number

---

##### `selfServiceGenerationEnabled`<sup>Required</sup> <a name="selfServiceGenerationEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.property.selfServiceGenerationEnabled"></a>

```typescript
public readonly selfServiceGenerationEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettings">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettings</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAuthenticationFactorSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAuthenticationFactorSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.deviceProtectionPolicy">deviceProtectionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.initialLockoutPeriodInSecs">initialLockoutPeriodInSecs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.keyPairLength">keyPairLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.lockoutEscalationPattern">lockoutEscalationPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.maxFailuresBeforeLockout">maxFailuresBeforeLockout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.maxFailuresBeforeWarning">maxFailuresBeforeWarning</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.maxLockoutIntervalInSecs">maxLockoutIntervalInSecs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.minPinLength">minPinLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.policyUpdateFreqInDays">policyUpdateFreqInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.requestSigningAlgo">requestSigningAlgo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.sharedSecretEncoding">sharedSecretEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.unlockAppForEachRequestEnabled">unlockAppForEachRequestEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.unlockAppIntervalInSecs">unlockAppIntervalInSecs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.unlockOnAppForegroundEnabled">unlockOnAppForegroundEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.unlockOnAppStartEnabled">unlockOnAppStartEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettings">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deviceProtectionPolicy`<sup>Required</sup> <a name="deviceProtectionPolicy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.deviceProtectionPolicy"></a>

```typescript
public readonly deviceProtectionPolicy: string;
```

- *Type:* string

---

##### `initialLockoutPeriodInSecs`<sup>Required</sup> <a name="initialLockoutPeriodInSecs" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.initialLockoutPeriodInSecs"></a>

```typescript
public readonly initialLockoutPeriodInSecs: number;
```

- *Type:* number

---

##### `keyPairLength`<sup>Required</sup> <a name="keyPairLength" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.keyPairLength"></a>

```typescript
public readonly keyPairLength: number;
```

- *Type:* number

---

##### `lockoutEscalationPattern`<sup>Required</sup> <a name="lockoutEscalationPattern" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.lockoutEscalationPattern"></a>

```typescript
public readonly lockoutEscalationPattern: string;
```

- *Type:* string

---

##### `maxFailuresBeforeLockout`<sup>Required</sup> <a name="maxFailuresBeforeLockout" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.maxFailuresBeforeLockout"></a>

```typescript
public readonly maxFailuresBeforeLockout: number;
```

- *Type:* number

---

##### `maxFailuresBeforeWarning`<sup>Required</sup> <a name="maxFailuresBeforeWarning" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.maxFailuresBeforeWarning"></a>

```typescript
public readonly maxFailuresBeforeWarning: number;
```

- *Type:* number

---

##### `maxLockoutIntervalInSecs`<sup>Required</sup> <a name="maxLockoutIntervalInSecs" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.maxLockoutIntervalInSecs"></a>

```typescript
public readonly maxLockoutIntervalInSecs: number;
```

- *Type:* number

---

##### `minPinLength`<sup>Required</sup> <a name="minPinLength" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.minPinLength"></a>

```typescript
public readonly minPinLength: number;
```

- *Type:* number

---

##### `policyUpdateFreqInDays`<sup>Required</sup> <a name="policyUpdateFreqInDays" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.policyUpdateFreqInDays"></a>

```typescript
public readonly policyUpdateFreqInDays: number;
```

- *Type:* number

---

##### `requestSigningAlgo`<sup>Required</sup> <a name="requestSigningAlgo" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.requestSigningAlgo"></a>

```typescript
public readonly requestSigningAlgo: string;
```

- *Type:* string

---

##### `sharedSecretEncoding`<sup>Required</sup> <a name="sharedSecretEncoding" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.sharedSecretEncoding"></a>

```typescript
public readonly sharedSecretEncoding: string;
```

- *Type:* string

---

##### `unlockAppForEachRequestEnabled`<sup>Required</sup> <a name="unlockAppForEachRequestEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.unlockAppForEachRequestEnabled"></a>

```typescript
public readonly unlockAppForEachRequestEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `unlockAppIntervalInSecs`<sup>Required</sup> <a name="unlockAppIntervalInSecs" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.unlockAppIntervalInSecs"></a>

```typescript
public readonly unlockAppIntervalInSecs: number;
```

- *Type:* number

---

##### `unlockOnAppForegroundEnabled`<sup>Required</sup> <a name="unlockOnAppForegroundEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.unlockOnAppForegroundEnabled"></a>

```typescript
public readonly unlockOnAppForegroundEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `unlockOnAppStartEnabled`<sup>Required</sup> <a name="unlockOnAppStartEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.unlockOnAppStartEnabled"></a>

```typescript
public readonly unlockOnAppStartEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettings">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettings</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAuthenticationFactorSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAuthenticationFactorSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicy">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicy">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicy</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAuthenticationFactorSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAuthenticationFactorSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.property.emailLinkCustomUrl">emailLinkCustomUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.property.emailLinkEnabled">emailLinkEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettings">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emailLinkCustomUrl`<sup>Required</sup> <a name="emailLinkCustomUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.property.emailLinkCustomUrl"></a>

```typescript
public readonly emailLinkCustomUrl: string;
```

- *Type:* string

---

##### `emailLinkEnabled`<sup>Required</sup> <a name="emailLinkEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.property.emailLinkEnabled"></a>

```typescript
public readonly emailLinkEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettings">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettings</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAuthenticationFactorSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAuthenticationFactorSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.property.maxEndpointTrustDurationInDays">maxEndpointTrustDurationInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.property.maxEnrolledDevices">maxEnrolledDevices</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.property.maxIncorrectAttempts">maxIncorrectAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.property.maxTrustedEndpoints">maxTrustedEndpoints</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.property.trustedEndpointsEnabled">trustedEndpointsEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictions">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxEndpointTrustDurationInDays`<sup>Required</sup> <a name="maxEndpointTrustDurationInDays" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.property.maxEndpointTrustDurationInDays"></a>

```typescript
public readonly maxEndpointTrustDurationInDays: number;
```

- *Type:* number

---

##### `maxEnrolledDevices`<sup>Required</sup> <a name="maxEnrolledDevices" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.property.maxEnrolledDevices"></a>

```typescript
public readonly maxEnrolledDevices: number;
```

- *Type:* number

---

##### `maxIncorrectAttempts`<sup>Required</sup> <a name="maxIncorrectAttempts" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.property.maxIncorrectAttempts"></a>

```typescript
public readonly maxIncorrectAttempts: number;
```

- *Type:* number

---

##### `maxTrustedEndpoints`<sup>Required</sup> <a name="maxTrustedEndpoints" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.property.maxTrustedEndpoints"></a>

```typescript
public readonly maxTrustedEndpoints: number;
```

- *Type:* number

---

##### `trustedEndpointsEnabled`<sup>Required</sup> <a name="trustedEndpointsEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.property.trustedEndpointsEnabled"></a>

```typescript
public readonly trustedEndpointsEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictions">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictions</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAuthenticationFactorSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAuthenticationFactorSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedBy">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedBy">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedBy</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAuthenticationFactorSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAuthenticationFactorSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedBy">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedBy">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAuthenticationFactorSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAuthenticationFactorSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.property.mobileNumberEnabled">mobileNumberEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.property.mobileNumberUpdateEnabled">mobileNumberUpdateEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettings">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mobileNumberEnabled`<sup>Required</sup> <a name="mobileNumberEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.property.mobileNumberEnabled"></a>

```typescript
public readonly mobileNumberEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `mobileNumberUpdateEnabled`<sup>Required</sup> <a name="mobileNumberUpdateEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.property.mobileNumberUpdateEnabled"></a>

```typescript
public readonly mobileNumberUpdateEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettings">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettings</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAuthenticationFactorSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAuthenticationFactorSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAuthenticationFactorSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMeta">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMeta;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMeta">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMeta</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAuthenticationFactorSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAuthenticationFactorSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.property.pullEnabled">pullEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettings">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pullEnabled`<sup>Required</sup> <a name="pullEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.property.pullEnabled"></a>

```typescript
public readonly pullEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettings">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettings</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAuthenticationFactorSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.attributes">attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.authenticationFactorSettingId">authenticationFactorSettingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.autoEnrollEmailFactorDisabled">autoEnrollEmailFactorDisabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.bypassCodeEnabled">bypassCodeEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.bypassCodeSettings">bypassCodeSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.clientAppSettings">clientAppSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.compartmentOcid">compartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.compliancePolicy">compliancePolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.deleteInProgress">deleteInProgress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.domainOcid">domainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.emailEnabled">emailEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.emailSettings">emailSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.endpointRestrictions">endpointRestrictions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.fidoAuthenticatorEnabled">fidoAuthenticatorEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.hideBackupFactorEnabled">hideBackupFactorEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.identityStoreSettings">identityStoreSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.mfaEnabledCategory">mfaEnabledCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.mfaEnrollmentType">mfaEnrollmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.notificationSettings">notificationSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.phoneCallEnabled">phoneCallEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.pushEnabled">pushEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.securityQuestionsEnabled">securityQuestionsEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.smsEnabled">smsEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.tenancyOcid">tenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.thirdPartyFactor">thirdPartyFactor</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.totpEnabled">totpEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.totpSettings">totpSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings">urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings">urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.userEnrollmentDisabledFactors">userEnrollmentDisabledFactors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.yubicoOtpEnabled">yubicoOtpEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettings">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

---

##### `authenticationFactorSettingId`<sup>Required</sup> <a name="authenticationFactorSettingId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.authenticationFactorSettingId"></a>

```typescript
public readonly authenticationFactorSettingId: string;
```

- *Type:* string

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `autoEnrollEmailFactorDisabled`<sup>Required</sup> <a name="autoEnrollEmailFactorDisabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.autoEnrollEmailFactorDisabled"></a>

```typescript
public readonly autoEnrollEmailFactorDisabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `bypassCodeEnabled`<sup>Required</sup> <a name="bypassCodeEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.bypassCodeEnabled"></a>

```typescript
public readonly bypassCodeEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `bypassCodeSettings`<sup>Required</sup> <a name="bypassCodeSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.bypassCodeSettings"></a>

```typescript
public readonly bypassCodeSettings: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsBypassCodeSettingsList</a>

---

##### `clientAppSettings`<sup>Required</sup> <a name="clientAppSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.clientAppSettings"></a>

```typescript
public readonly clientAppSettings: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsClientAppSettingsList</a>

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.compartmentOcid"></a>

```typescript
public readonly compartmentOcid: string;
```

- *Type:* string

---

##### `compliancePolicy`<sup>Required</sup> <a name="compliancePolicy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.compliancePolicy"></a>

```typescript
public readonly compliancePolicy: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsCompliancePolicyList</a>

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.deleteInProgress"></a>

```typescript
public readonly deleteInProgress: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.domainOcid"></a>

```typescript
public readonly domainOcid: string;
```

- *Type:* string

---

##### `emailEnabled`<sup>Required</sup> <a name="emailEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.emailEnabled"></a>

```typescript
public readonly emailEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `emailSettings`<sup>Required</sup> <a name="emailSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.emailSettings"></a>

```typescript
public readonly emailSettings: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEmailSettingsList</a>

---

##### `endpointRestrictions`<sup>Required</sup> <a name="endpointRestrictions" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.endpointRestrictions"></a>

```typescript
public readonly endpointRestrictions: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsEndpointRestrictionsList</a>

---

##### `fidoAuthenticatorEnabled`<sup>Required</sup> <a name="fidoAuthenticatorEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.fidoAuthenticatorEnabled"></a>

```typescript
public readonly fidoAuthenticatorEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `hideBackupFactorEnabled`<sup>Required</sup> <a name="hideBackupFactorEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.hideBackupFactorEnabled"></a>

```typescript
public readonly hideBackupFactorEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.idcsCreatedBy"></a>

```typescript
public readonly idcsCreatedBy: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsCreatedByList</a>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.idcsLastModifiedBy"></a>

```typescript
public readonly idcsLastModifiedBy: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.idcsLastUpgradedInRelease"></a>

```typescript
public readonly idcsLastUpgradedInRelease: string;
```

- *Type:* string

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.idcsPreventedOperations"></a>

```typescript
public readonly idcsPreventedOperations: string[];
```

- *Type:* string[]

---

##### `identityStoreSettings`<sup>Required</sup> <a name="identityStoreSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.identityStoreSettings"></a>

```typescript
public readonly identityStoreSettings: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsIdentityStoreSettingsList</a>

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.meta"></a>

```typescript
public readonly meta: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsMetaList</a>

---

##### `mfaEnabledCategory`<sup>Required</sup> <a name="mfaEnabledCategory" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.mfaEnabledCategory"></a>

```typescript
public readonly mfaEnabledCategory: string;
```

- *Type:* string

---

##### `mfaEnrollmentType`<sup>Required</sup> <a name="mfaEnrollmentType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.mfaEnrollmentType"></a>

```typescript
public readonly mfaEnrollmentType: string;
```

- *Type:* string

---

##### `notificationSettings`<sup>Required</sup> <a name="notificationSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.notificationSettings"></a>

```typescript
public readonly notificationSettings: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsNotificationSettingsList</a>

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `phoneCallEnabled`<sup>Required</sup> <a name="phoneCallEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.phoneCallEnabled"></a>

```typescript
public readonly phoneCallEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `pushEnabled`<sup>Required</sup> <a name="pushEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.pushEnabled"></a>

```typescript
public readonly pushEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `securityQuestionsEnabled`<sup>Required</sup> <a name="securityQuestionsEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.securityQuestionsEnabled"></a>

```typescript
public readonly securityQuestionsEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `smsEnabled`<sup>Required</sup> <a name="smsEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.smsEnabled"></a>

```typescript
public readonly smsEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.tags"></a>

```typescript
public readonly tags: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.tenancyOcid"></a>

```typescript
public readonly tenancyOcid: string;
```

- *Type:* string

---

##### `thirdPartyFactor`<sup>Required</sup> <a name="thirdPartyFactor" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.thirdPartyFactor"></a>

```typescript
public readonly thirdPartyFactor: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList</a>

---

##### `totpEnabled`<sup>Required</sup> <a name="totpEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.totpEnabled"></a>

```typescript
public readonly totpEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `totpSettings`<sup>Required</sup> <a name="totpSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.totpSettings"></a>

```typescript
public readonly totpSettings: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList</a>

---

##### `urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings`<sup>Required</sup> <a name="urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings"></a>

```typescript
public readonly urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList</a>

---

##### `urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings`<sup>Required</sup> <a name="urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings"></a>

```typescript
public readonly urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList</a>

---

##### `userEnrollmentDisabledFactors`<sup>Required</sup> <a name="userEnrollmentDisabledFactors" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.userEnrollmentDisabledFactors"></a>

```typescript
public readonly userEnrollmentDisabledFactors: string[];
```

- *Type:* string[]

---

##### `yubicoOtpEnabled`<sup>Required</sup> <a name="yubicoOtpEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.yubicoOtpEnabled"></a>

```typescript
public readonly yubicoOtpEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettings">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettings</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAuthenticationFactorSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAuthenticationFactorSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTags">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTags;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTags">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTags</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAuthenticationFactorSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAuthenticationFactorSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.property.duoSecurity">duoSecurity</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactor">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `duoSecurity`<sup>Required</sup> <a name="duoSecurity" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.property.duoSecurity"></a>

```typescript
public readonly duoSecurity: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactor;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactor">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsThirdPartyFactor</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAuthenticationFactorSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAuthenticationFactorSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.property.emailOtpValidityDurationInMins">emailOtpValidityDurationInMins</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.property.emailPasscodeLength">emailPasscodeLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.property.hashingAlgorithm">hashingAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.property.jwtValidityDurationInSecs">jwtValidityDurationInSecs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.property.keyRefreshIntervalInDays">keyRefreshIntervalInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.property.passcodeLength">passcodeLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.property.smsOtpValidityDurationInMins">smsOtpValidityDurationInMins</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.property.smsPasscodeLength">smsPasscodeLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.property.timeStepInSecs">timeStepInSecs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.property.timeStepTolerance">timeStepTolerance</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettings">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emailOtpValidityDurationInMins`<sup>Required</sup> <a name="emailOtpValidityDurationInMins" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.property.emailOtpValidityDurationInMins"></a>

```typescript
public readonly emailOtpValidityDurationInMins: number;
```

- *Type:* number

---

##### `emailPasscodeLength`<sup>Required</sup> <a name="emailPasscodeLength" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.property.emailPasscodeLength"></a>

```typescript
public readonly emailPasscodeLength: number;
```

- *Type:* number

---

##### `hashingAlgorithm`<sup>Required</sup> <a name="hashingAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.property.hashingAlgorithm"></a>

```typescript
public readonly hashingAlgorithm: string;
```

- *Type:* string

---

##### `jwtValidityDurationInSecs`<sup>Required</sup> <a name="jwtValidityDurationInSecs" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.property.jwtValidityDurationInSecs"></a>

```typescript
public readonly jwtValidityDurationInSecs: number;
```

- *Type:* number

---

##### `keyRefreshIntervalInDays`<sup>Required</sup> <a name="keyRefreshIntervalInDays" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.property.keyRefreshIntervalInDays"></a>

```typescript
public readonly keyRefreshIntervalInDays: number;
```

- *Type:* number

---

##### `passcodeLength`<sup>Required</sup> <a name="passcodeLength" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.property.passcodeLength"></a>

```typescript
public readonly passcodeLength: number;
```

- *Type:* number

---

##### `smsOtpValidityDurationInMins`<sup>Required</sup> <a name="smsOtpValidityDurationInMins" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.property.smsOtpValidityDurationInMins"></a>

```typescript
public readonly smsOtpValidityDurationInMins: number;
```

- *Type:* number

---

##### `smsPasscodeLength`<sup>Required</sup> <a name="smsPasscodeLength" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.property.smsPasscodeLength"></a>

```typescript
public readonly smsPasscodeLength: number;
```

- *Type:* number

---

##### `timeStepInSecs`<sup>Required</sup> <a name="timeStepInSecs" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.property.timeStepInSecs"></a>

```typescript
public readonly timeStepInSecs: number;
```

- *Type:* number

---

##### `timeStepTolerance`<sup>Required</sup> <a name="timeStepTolerance" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.property.timeStepTolerance"></a>

```typescript
public readonly timeStepTolerance: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettings">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsTotpSettings</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAuthenticationFactorSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAuthenticationFactorSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.attestation">attestation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionAttachment">authenticatorSelectionAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionRequireResidentKey">authenticatorSelectionRequireResidentKey</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionResidentKey">authenticatorSelectionResidentKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionUserVerification">authenticatorSelectionUserVerification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.domainValidationLevel">domainValidationLevel</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.excludeCredentials">excludeCredentials</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.publicKeyTypes">publicKeyTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attestation`<sup>Required</sup> <a name="attestation" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.attestation"></a>

```typescript
public readonly attestation: string;
```

- *Type:* string

---

##### `authenticatorSelectionAttachment`<sup>Required</sup> <a name="authenticatorSelectionAttachment" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionAttachment"></a>

```typescript
public readonly authenticatorSelectionAttachment: string;
```

- *Type:* string

---

##### `authenticatorSelectionRequireResidentKey`<sup>Required</sup> <a name="authenticatorSelectionRequireResidentKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionRequireResidentKey"></a>

```typescript
public readonly authenticatorSelectionRequireResidentKey: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `authenticatorSelectionResidentKey`<sup>Required</sup> <a name="authenticatorSelectionResidentKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionResidentKey"></a>

```typescript
public readonly authenticatorSelectionResidentKey: string;
```

- *Type:* string

---

##### `authenticatorSelectionUserVerification`<sup>Required</sup> <a name="authenticatorSelectionUserVerification" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionUserVerification"></a>

```typescript
public readonly authenticatorSelectionUserVerification: string;
```

- *Type:* string

---

##### `domainValidationLevel`<sup>Required</sup> <a name="domainValidationLevel" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.domainValidationLevel"></a>

```typescript
public readonly domainValidationLevel: number;
```

- *Type:* number

---

##### `excludeCredentials`<sup>Required</sup> <a name="excludeCredentials" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.excludeCredentials"></a>

```typescript
public readonly excludeCredentials: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `publicKeyTypes`<sup>Required</sup> <a name="publicKeyTypes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.publicKeyTypes"></a>

```typescript
public readonly publicKeyTypes: string[];
```

- *Type:* string[]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAuthenticationFactorSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAuthenticationFactorSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.apiHostname">apiHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.attestationKey">attestationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.integrationKey">integrationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.secretKey">secretKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.userMappingAttribute">userMappingAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiHostname`<sup>Required</sup> <a name="apiHostname" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.apiHostname"></a>

```typescript
public readonly apiHostname: string;
```

- *Type:* string

---

##### `attestationKey`<sup>Required</sup> <a name="attestationKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.attestationKey"></a>

```typescript
public readonly attestationKey: string;
```

- *Type:* string

---

##### `integrationKey`<sup>Required</sup> <a name="integrationKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.integrationKey"></a>

```typescript
public readonly integrationKey: string;
```

- *Type:* string

---

##### `secretKey`<sup>Required</sup> <a name="secretKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.secretKey"></a>

```typescript
public readonly secretKey: string;
```

- *Type:* string

---

##### `userMappingAttribute`<sup>Required</sup> <a name="userMappingAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.userMappingAttribute"></a>

```typescript
public readonly userMappingAttribute: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAuthenticationFactorSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAuthenticationFactorSettings } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.duoSecuritySettings">duoSecuritySettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `duoSecuritySettings`<sup>Required</sup> <a name="duoSecuritySettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.duoSecuritySettings"></a>

```typescript
public readonly duoSecuritySettings: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSettings.DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings">DataOciIdentityDomainsAuthenticationFactorSettingsAuthenticationFactorSettingsUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings</a>

---



