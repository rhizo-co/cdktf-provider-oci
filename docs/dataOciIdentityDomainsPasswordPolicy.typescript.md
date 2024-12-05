# `dataOciIdentityDomainsPasswordPolicy` Submodule <a name="`dataOciIdentityDomainsPasswordPolicy` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsPasswordPolicy <a name="DataOciIdentityDomainsPasswordPolicy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policy oci_identity_domains_password_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsPasswordPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy(scope: Construct, id: string, config: DataOciIdentityDomainsPasswordPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfig">DataOciIdentityDomainsPasswordPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfig">DataOciIdentityDomainsPasswordPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.resetAttributeSets">resetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAttributes` <a name="resetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetAttributeSets` <a name="resetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.resetAttributeSets"></a>

```typescript
public resetAttributeSets(): void
```

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.resetAuthorization"></a>

```typescript
public resetAuthorization(): void
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.resetResourceTypeSchemaVersion"></a>

```typescript
public resetResourceTypeSchemaVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsPasswordPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.isConstruct"></a>

```typescript
import { dataOciIdentityDomainsPasswordPolicy } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.isTerraformElement"></a>

```typescript
import { dataOciIdentityDomainsPasswordPolicy } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.isTerraformDataSource"></a>

```typescript
import { dataOciIdentityDomainsPasswordPolicy } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.generateConfigForImport"></a>

```typescript
import { dataOciIdentityDomainsPasswordPolicy } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciIdentityDomainsPasswordPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityDomainsPasswordPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityDomainsPasswordPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsPasswordPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.allowedChars">allowedChars</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.compartmentOcid">compartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.configuredPasswordPolicyRules">configuredPasswordPolicyRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList">DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.deleteInProgress">deleteInProgress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.dictionaryDelimiter">dictionaryDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.dictionaryLocation">dictionaryLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.dictionaryWordDisallowed">dictionaryWordDisallowed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.disallowedChars">disallowedChars</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.disallowedSubstrings">disallowedSubstrings</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.disallowedUserAttributeValues">disallowedUserAttributeValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.distinctCharacters">distinctCharacters</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.domainOcid">domainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.firstNameDisallowed">firstNameDisallowed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.forcePasswordReset">forcePasswordReset</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.groups">groups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsList">DataOciIdentityDomainsPasswordPolicyGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByList">DataOciIdentityDomainsPasswordPolicyIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByList">DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.lastNameDisallowed">lastNameDisallowed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.lockoutDuration">lockoutDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.maxIncorrectAttempts">maxIncorrectAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.maxLength">maxLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.maxRepeatedChars">maxRepeatedChars</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.maxSpecialChars">maxSpecialChars</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaList">DataOciIdentityDomainsPasswordPolicyMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.minAlphaNumerals">minAlphaNumerals</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.minAlphas">minAlphas</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.minLength">minLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.minLowerCase">minLowerCase</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.minNumerals">minNumerals</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.minPasswordAge">minPasswordAge</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.minSpecialChars">minSpecialChars</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.minUniqueChars">minUniqueChars</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.minUpperCase">minUpperCase</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.numPasswordsInHistory">numPasswordsInHistory</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.passwordExpiresAfter">passwordExpiresAfter</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.passwordExpireWarning">passwordExpireWarning</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.passwordStrength">passwordStrength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.requiredChars">requiredChars</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.startsWithAlphabet">startsWithAlphabet</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsList">DataOciIdentityDomainsPasswordPolicyTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.tenancyOcid">tenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.userNameDisallowed">userNameDisallowed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.attributeSetsInput">attributeSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.attributesInput">attributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.authorizationInput">authorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.passwordPolicyIdInput">passwordPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.attributes">attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.passwordPolicyId">passwordPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `allowedChars`<sup>Required</sup> <a name="allowedChars" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.allowedChars"></a>

```typescript
public readonly allowedChars: string;
```

- *Type:* string

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.compartmentOcid"></a>

```typescript
public readonly compartmentOcid: string;
```

- *Type:* string

---

##### `configuredPasswordPolicyRules`<sup>Required</sup> <a name="configuredPasswordPolicyRules" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.configuredPasswordPolicyRules"></a>

```typescript
public readonly configuredPasswordPolicyRules: DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList">DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList</a>

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.deleteInProgress"></a>

```typescript
public readonly deleteInProgress: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `dictionaryDelimiter`<sup>Required</sup> <a name="dictionaryDelimiter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.dictionaryDelimiter"></a>

```typescript
public readonly dictionaryDelimiter: string;
```

- *Type:* string

---

##### `dictionaryLocation`<sup>Required</sup> <a name="dictionaryLocation" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.dictionaryLocation"></a>

```typescript
public readonly dictionaryLocation: string;
```

- *Type:* string

---

##### `dictionaryWordDisallowed`<sup>Required</sup> <a name="dictionaryWordDisallowed" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.dictionaryWordDisallowed"></a>

```typescript
public readonly dictionaryWordDisallowed: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `disallowedChars`<sup>Required</sup> <a name="disallowedChars" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.disallowedChars"></a>

```typescript
public readonly disallowedChars: string;
```

- *Type:* string

---

##### `disallowedSubstrings`<sup>Required</sup> <a name="disallowedSubstrings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.disallowedSubstrings"></a>

```typescript
public readonly disallowedSubstrings: string[];
```

- *Type:* string[]

---

##### `disallowedUserAttributeValues`<sup>Required</sup> <a name="disallowedUserAttributeValues" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.disallowedUserAttributeValues"></a>

```typescript
public readonly disallowedUserAttributeValues: string[];
```

- *Type:* string[]

---

##### `distinctCharacters`<sup>Required</sup> <a name="distinctCharacters" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.distinctCharacters"></a>

```typescript
public readonly distinctCharacters: number;
```

- *Type:* number

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.domainOcid"></a>

```typescript
public readonly domainOcid: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `firstNameDisallowed`<sup>Required</sup> <a name="firstNameDisallowed" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.firstNameDisallowed"></a>

```typescript
public readonly firstNameDisallowed: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `forcePasswordReset`<sup>Required</sup> <a name="forcePasswordReset" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.forcePasswordReset"></a>

```typescript
public readonly forcePasswordReset: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `groups`<sup>Required</sup> <a name="groups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.groups"></a>

```typescript
public readonly groups: DataOciIdentityDomainsPasswordPolicyGroupsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsList">DataOciIdentityDomainsPasswordPolicyGroupsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.idcsCreatedBy"></a>

```typescript
public readonly idcsCreatedBy: DataOciIdentityDomainsPasswordPolicyIdcsCreatedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByList">DataOciIdentityDomainsPasswordPolicyIdcsCreatedByList</a>

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.idcsLastModifiedBy"></a>

```typescript
public readonly idcsLastModifiedBy: DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByList">DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.idcsLastUpgradedInRelease"></a>

```typescript
public readonly idcsLastUpgradedInRelease: string;
```

- *Type:* string

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.idcsPreventedOperations"></a>

```typescript
public readonly idcsPreventedOperations: string[];
```

- *Type:* string[]

---

##### `lastNameDisallowed`<sup>Required</sup> <a name="lastNameDisallowed" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.lastNameDisallowed"></a>

```typescript
public readonly lastNameDisallowed: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lockoutDuration`<sup>Required</sup> <a name="lockoutDuration" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.lockoutDuration"></a>

```typescript
public readonly lockoutDuration: number;
```

- *Type:* number

---

##### `maxIncorrectAttempts`<sup>Required</sup> <a name="maxIncorrectAttempts" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.maxIncorrectAttempts"></a>

```typescript
public readonly maxIncorrectAttempts: number;
```

- *Type:* number

---

##### `maxLength`<sup>Required</sup> <a name="maxLength" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.maxLength"></a>

```typescript
public readonly maxLength: number;
```

- *Type:* number

---

##### `maxRepeatedChars`<sup>Required</sup> <a name="maxRepeatedChars" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.maxRepeatedChars"></a>

```typescript
public readonly maxRepeatedChars: number;
```

- *Type:* number

---

##### `maxSpecialChars`<sup>Required</sup> <a name="maxSpecialChars" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.maxSpecialChars"></a>

```typescript
public readonly maxSpecialChars: number;
```

- *Type:* number

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.meta"></a>

```typescript
public readonly meta: DataOciIdentityDomainsPasswordPolicyMetaList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaList">DataOciIdentityDomainsPasswordPolicyMetaList</a>

---

##### `minAlphaNumerals`<sup>Required</sup> <a name="minAlphaNumerals" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.minAlphaNumerals"></a>

```typescript
public readonly minAlphaNumerals: number;
```

- *Type:* number

---

##### `minAlphas`<sup>Required</sup> <a name="minAlphas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.minAlphas"></a>

```typescript
public readonly minAlphas: number;
```

- *Type:* number

---

##### `minLength`<sup>Required</sup> <a name="minLength" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.minLength"></a>

```typescript
public readonly minLength: number;
```

- *Type:* number

---

##### `minLowerCase`<sup>Required</sup> <a name="minLowerCase" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.minLowerCase"></a>

```typescript
public readonly minLowerCase: number;
```

- *Type:* number

---

##### `minNumerals`<sup>Required</sup> <a name="minNumerals" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.minNumerals"></a>

```typescript
public readonly minNumerals: number;
```

- *Type:* number

---

##### `minPasswordAge`<sup>Required</sup> <a name="minPasswordAge" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.minPasswordAge"></a>

```typescript
public readonly minPasswordAge: number;
```

- *Type:* number

---

##### `minSpecialChars`<sup>Required</sup> <a name="minSpecialChars" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.minSpecialChars"></a>

```typescript
public readonly minSpecialChars: number;
```

- *Type:* number

---

##### `minUniqueChars`<sup>Required</sup> <a name="minUniqueChars" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.minUniqueChars"></a>

```typescript
public readonly minUniqueChars: number;
```

- *Type:* number

---

##### `minUpperCase`<sup>Required</sup> <a name="minUpperCase" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.minUpperCase"></a>

```typescript
public readonly minUpperCase: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `numPasswordsInHistory`<sup>Required</sup> <a name="numPasswordsInHistory" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.numPasswordsInHistory"></a>

```typescript
public readonly numPasswordsInHistory: number;
```

- *Type:* number

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `passwordExpiresAfter`<sup>Required</sup> <a name="passwordExpiresAfter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.passwordExpiresAfter"></a>

```typescript
public readonly passwordExpiresAfter: number;
```

- *Type:* number

---

##### `passwordExpireWarning`<sup>Required</sup> <a name="passwordExpireWarning" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.passwordExpireWarning"></a>

```typescript
public readonly passwordExpireWarning: number;
```

- *Type:* number

---

##### `passwordStrength`<sup>Required</sup> <a name="passwordStrength" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.passwordStrength"></a>

```typescript
public readonly passwordStrength: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `requiredChars`<sup>Required</sup> <a name="requiredChars" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.requiredChars"></a>

```typescript
public readonly requiredChars: string;
```

- *Type:* string

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `startsWithAlphabet`<sup>Required</sup> <a name="startsWithAlphabet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.startsWithAlphabet"></a>

```typescript
public readonly startsWithAlphabet: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.tags"></a>

```typescript
public readonly tags: DataOciIdentityDomainsPasswordPolicyTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsList">DataOciIdentityDomainsPasswordPolicyTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.tenancyOcid"></a>

```typescript
public readonly tenancyOcid: string;
```

- *Type:* string

---

##### `userNameDisallowed`<sup>Required</sup> <a name="userNameDisallowed" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.userNameDisallowed"></a>

```typescript
public readonly userNameDisallowed: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `attributeSetsInput`<sup>Optional</sup> <a name="attributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.attributeSetsInput"></a>

```typescript
public readonly attributeSetsInput: string[];
```

- *Type:* string[]

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.attributesInput"></a>

```typescript
public readonly attributesInput: string;
```

- *Type:* string

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: string;
```

- *Type:* string

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.idcsEndpointInput"></a>

```typescript
public readonly idcsEndpointInput: string;
```

- *Type:* string

---

##### `passwordPolicyIdInput`<sup>Optional</sup> <a name="passwordPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.passwordPolicyIdInput"></a>

```typescript
public readonly passwordPolicyIdInput: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.resourceTypeSchemaVersionInput"></a>

```typescript
public readonly resourceTypeSchemaVersionInput: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `passwordPolicyId`<sup>Required</sup> <a name="passwordPolicyId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.passwordPolicyId"></a>

```typescript
public readonly passwordPolicyId: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsPasswordPolicyConfig <a name="DataOciIdentityDomainsPasswordPolicyConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfig.Initializer"></a>

```typescript
import { dataOciIdentityDomainsPasswordPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsPasswordPolicyConfig: dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policy#idcs_endpoint DataOciIdentityDomainsPasswordPolicy#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfig.property.passwordPolicyId">passwordPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policy#password_policy_id DataOciIdentityDomainsPasswordPolicy#password_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfig.property.attributes">attributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policy#attributes DataOciIdentityDomainsPasswordPolicy#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfig.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policy#attribute_sets DataOciIdentityDomainsPasswordPolicy#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfig.property.authorization">authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policy#authorization DataOciIdentityDomainsPasswordPolicy#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policy#resource_type_schema_version DataOciIdentityDomainsPasswordPolicy#resource_type_schema_version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfig.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policy#idcs_endpoint DataOciIdentityDomainsPasswordPolicy#idcs_endpoint}.

---

##### `passwordPolicyId`<sup>Required</sup> <a name="passwordPolicyId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfig.property.passwordPolicyId"></a>

```typescript
public readonly passwordPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policy#password_policy_id DataOciIdentityDomainsPasswordPolicy#password_policy_id}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfig.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policy#attributes DataOciIdentityDomainsPasswordPolicy#attributes}.

---

##### `attributeSets`<sup>Optional</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfig.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policy#attribute_sets DataOciIdentityDomainsPasswordPolicy#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfig.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policy#authorization DataOciIdentityDomainsPasswordPolicy#authorization}.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfig.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policy#resource_type_schema_version DataOciIdentityDomainsPasswordPolicy#resource_type_schema_version}.

---

### DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules <a name="DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules.Initializer"></a>

```typescript
import { dataOciIdentityDomainsPasswordPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules: dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules = { ... }
```


### DataOciIdentityDomainsPasswordPolicyGroups <a name="DataOciIdentityDomainsPasswordPolicyGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroups.Initializer"></a>

```typescript
import { dataOciIdentityDomainsPasswordPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsPasswordPolicyGroups: dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroups = { ... }
```


### DataOciIdentityDomainsPasswordPolicyIdcsCreatedBy <a name="DataOciIdentityDomainsPasswordPolicyIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsPasswordPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsPasswordPolicyIdcsCreatedBy: dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedBy = { ... }
```


### DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedBy <a name="DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsPasswordPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsPasswordPolicyIdcsLastModifiedBy: dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedBy = { ... }
```


### DataOciIdentityDomainsPasswordPolicyMeta <a name="DataOciIdentityDomainsPasswordPolicyMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMeta.Initializer"></a>

```typescript
import { dataOciIdentityDomainsPasswordPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsPasswordPolicyMeta: dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMeta = { ... }
```


### DataOciIdentityDomainsPasswordPolicyTags <a name="DataOciIdentityDomainsPasswordPolicyTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTags.Initializer"></a>

```typescript
import { dataOciIdentityDomainsPasswordPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsPasswordPolicyTags: dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList <a name="DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsPasswordPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference <a name="DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsPasswordPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules">DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules">DataOciIdentityDomainsPasswordPolicyConfiguredPasswordPolicyRules</a>

---


### DataOciIdentityDomainsPasswordPolicyGroupsList <a name="DataOciIdentityDomainsPasswordPolicyGroupsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsPasswordPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsPasswordPolicyGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsPasswordPolicyGroupsOutputReference <a name="DataOciIdentityDomainsPasswordPolicyGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsPasswordPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroups">DataOciIdentityDomainsPasswordPolicyGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsPasswordPolicyGroups;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyGroups">DataOciIdentityDomainsPasswordPolicyGroups</a>

---


### DataOciIdentityDomainsPasswordPolicyIdcsCreatedByList <a name="DataOciIdentityDomainsPasswordPolicyIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsPasswordPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsPasswordPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedBy">DataOciIdentityDomainsPasswordPolicyIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsPasswordPolicyIdcsCreatedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsCreatedBy">DataOciIdentityDomainsPasswordPolicyIdcsCreatedBy</a>

---


### DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByList <a name="DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsPasswordPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsPasswordPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedBy">DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedBy">DataOciIdentityDomainsPasswordPolicyIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsPasswordPolicyMetaList <a name="DataOciIdentityDomainsPasswordPolicyMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsPasswordPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsPasswordPolicyMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsPasswordPolicyMetaOutputReference <a name="DataOciIdentityDomainsPasswordPolicyMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsPasswordPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMeta">DataOciIdentityDomainsPasswordPolicyMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMetaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsPasswordPolicyMeta;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyMeta">DataOciIdentityDomainsPasswordPolicyMeta</a>

---


### DataOciIdentityDomainsPasswordPolicyTagsList <a name="DataOciIdentityDomainsPasswordPolicyTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsPasswordPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsPasswordPolicyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsPasswordPolicyTagsOutputReference <a name="DataOciIdentityDomainsPasswordPolicyTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsPasswordPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTags">DataOciIdentityDomainsPasswordPolicyTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsPasswordPolicyTags;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicy.DataOciIdentityDomainsPasswordPolicyTags">DataOciIdentityDomainsPasswordPolicyTags</a>

---



