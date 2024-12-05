# `dataOciIdentityDomainsSocialIdentityProviders` Submodule <a name="`dataOciIdentityDomainsSocialIdentityProviders` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsSocialIdentityProviders <a name="DataOciIdentityDomainsSocialIdentityProviders" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers oci_identity_domains_social_identity_providers}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSocialIdentityProviders } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders(scope: Construct, id: string, config: DataOciIdentityDomainsSocialIdentityProvidersConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig">DataOciIdentityDomainsSocialIdentityProvidersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig">DataOciIdentityDomainsSocialIdentityProvidersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetSocialIdentityProviderCount">resetSocialIdentityProviderCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetSocialIdentityProviderFilter">resetSocialIdentityProviderFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetSortBy">resetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetSortOrder">resetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetStartIndex">resetStartIndex</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetAuthorization"></a>

```typescript
public resetAuthorization(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetId"></a>

```typescript
public resetId(): void
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetResourceTypeSchemaVersion"></a>

```typescript
public resetResourceTypeSchemaVersion(): void
```

##### `resetSocialIdentityProviderCount` <a name="resetSocialIdentityProviderCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetSocialIdentityProviderCount"></a>

```typescript
public resetSocialIdentityProviderCount(): void
```

##### `resetSocialIdentityProviderFilter` <a name="resetSocialIdentityProviderFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetSocialIdentityProviderFilter"></a>

```typescript
public resetSocialIdentityProviderFilter(): void
```

##### `resetSortBy` <a name="resetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetSortBy"></a>

```typescript
public resetSortBy(): void
```

##### `resetSortOrder` <a name="resetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetSortOrder"></a>

```typescript
public resetSortOrder(): void
```

##### `resetStartIndex` <a name="resetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.resetStartIndex"></a>

```typescript
public resetStartIndex(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsSocialIdentityProviders resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.isConstruct"></a>

```typescript
import { dataOciIdentityDomainsSocialIdentityProviders } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.isTerraformElement"></a>

```typescript
import { dataOciIdentityDomainsSocialIdentityProviders } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.isTerraformDataSource"></a>

```typescript
import { dataOciIdentityDomainsSocialIdentityProviders } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.generateConfigForImport"></a>

```typescript
import { dataOciIdentityDomainsSocialIdentityProviders } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciIdentityDomainsSocialIdentityProviders resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityDomainsSocialIdentityProviders to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityDomainsSocialIdentityProviders that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsSocialIdentityProviders to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.itemsPerPage">itemsPerPage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.socialIdentityProviders">socialIdentityProviders</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.totalResults">totalResults</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.authorizationInput">authorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.socialIdentityProviderCountInput">socialIdentityProviderCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.socialIdentityProviderFilterInput">socialIdentityProviderFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.sortByInput">sortByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.sortOrderInput">sortOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.startIndexInput">startIndexInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.socialIdentityProviderCount">socialIdentityProviderCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.socialIdentityProviderFilter">socialIdentityProviderFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.sortBy">sortBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.sortOrder">sortOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.startIndex">startIndex</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `itemsPerPage`<sup>Required</sup> <a name="itemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.itemsPerPage"></a>

```typescript
public readonly itemsPerPage: number;
```

- *Type:* number

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `socialIdentityProviders`<sup>Required</sup> <a name="socialIdentityProviders" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.socialIdentityProviders"></a>

```typescript
public readonly socialIdentityProviders: DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList</a>

---

##### `totalResults`<sup>Required</sup> <a name="totalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.totalResults"></a>

```typescript
public readonly totalResults: number;
```

- *Type:* number

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.idcsEndpointInput"></a>

```typescript
public readonly idcsEndpointInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.resourceTypeSchemaVersionInput"></a>

```typescript
public readonly resourceTypeSchemaVersionInput: string;
```

- *Type:* string

---

##### `socialIdentityProviderCountInput`<sup>Optional</sup> <a name="socialIdentityProviderCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.socialIdentityProviderCountInput"></a>

```typescript
public readonly socialIdentityProviderCountInput: number;
```

- *Type:* number

---

##### `socialIdentityProviderFilterInput`<sup>Optional</sup> <a name="socialIdentityProviderFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.socialIdentityProviderFilterInput"></a>

```typescript
public readonly socialIdentityProviderFilterInput: string;
```

- *Type:* string

---

##### `sortByInput`<sup>Optional</sup> <a name="sortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.sortByInput"></a>

```typescript
public readonly sortByInput: string;
```

- *Type:* string

---

##### `sortOrderInput`<sup>Optional</sup> <a name="sortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.sortOrderInput"></a>

```typescript
public readonly sortOrderInput: string;
```

- *Type:* string

---

##### `startIndexInput`<sup>Optional</sup> <a name="startIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.startIndexInput"></a>

```typescript
public readonly startIndexInput: number;
```

- *Type:* number

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `socialIdentityProviderCount`<sup>Required</sup> <a name="socialIdentityProviderCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.socialIdentityProviderCount"></a>

```typescript
public readonly socialIdentityProviderCount: number;
```

- *Type:* number

---

##### `socialIdentityProviderFilter`<sup>Required</sup> <a name="socialIdentityProviderFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.socialIdentityProviderFilter"></a>

```typescript
public readonly socialIdentityProviderFilter: string;
```

- *Type:* string

---

##### `sortBy`<sup>Required</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.sortBy"></a>

```typescript
public readonly sortBy: string;
```

- *Type:* string

---

##### `sortOrder`<sup>Required</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.sortOrder"></a>

```typescript
public readonly sortOrder: string;
```

- *Type:* string

---

##### `startIndex`<sup>Required</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.startIndex"></a>

```typescript
public readonly startIndex: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProviders.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsSocialIdentityProvidersConfig <a name="DataOciIdentityDomainsSocialIdentityProvidersConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSocialIdentityProviders } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsSocialIdentityProvidersConfig: dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#idcs_endpoint DataOciIdentityDomainsSocialIdentityProviders#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.authorization">authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#authorization DataOciIdentityDomainsSocialIdentityProviders#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#compartment_id DataOciIdentityDomainsSocialIdentityProviders#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#id DataOciIdentityDomainsSocialIdentityProviders#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#resource_type_schema_version DataOciIdentityDomainsSocialIdentityProviders#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.socialIdentityProviderCount">socialIdentityProviderCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#social_identity_provider_count DataOciIdentityDomainsSocialIdentityProviders#social_identity_provider_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.socialIdentityProviderFilter">socialIdentityProviderFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#social_identity_provider_filter DataOciIdentityDomainsSocialIdentityProviders#social_identity_provider_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.sortBy">sortBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#sort_by DataOciIdentityDomainsSocialIdentityProviders#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.sortOrder">sortOrder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#sort_order DataOciIdentityDomainsSocialIdentityProviders#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.startIndex">startIndex</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#start_index DataOciIdentityDomainsSocialIdentityProviders#start_index}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#idcs_endpoint DataOciIdentityDomainsSocialIdentityProviders#idcs_endpoint}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#authorization DataOciIdentityDomainsSocialIdentityProviders#authorization}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#compartment_id DataOciIdentityDomainsSocialIdentityProviders#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#id DataOciIdentityDomainsSocialIdentityProviders#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#resource_type_schema_version DataOciIdentityDomainsSocialIdentityProviders#resource_type_schema_version}.

---

##### `socialIdentityProviderCount`<sup>Optional</sup> <a name="socialIdentityProviderCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.socialIdentityProviderCount"></a>

```typescript
public readonly socialIdentityProviderCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#social_identity_provider_count DataOciIdentityDomainsSocialIdentityProviders#social_identity_provider_count}.

---

##### `socialIdentityProviderFilter`<sup>Optional</sup> <a name="socialIdentityProviderFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.socialIdentityProviderFilter"></a>

```typescript
public readonly socialIdentityProviderFilter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#social_identity_provider_filter DataOciIdentityDomainsSocialIdentityProviders#social_identity_provider_filter}.

---

##### `sortBy`<sup>Optional</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.sortBy"></a>

```typescript
public readonly sortBy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#sort_by DataOciIdentityDomainsSocialIdentityProviders#sort_by}.

---

##### `sortOrder`<sup>Optional</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.sortOrder"></a>

```typescript
public readonly sortOrder: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#sort_order DataOciIdentityDomainsSocialIdentityProviders#sort_order}.

---

##### `startIndex`<sup>Optional</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersConfig.property.startIndex"></a>

```typescript
public readonly startIndex: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_providers#start_index DataOciIdentityDomainsSocialIdentityProviders#start_index}.

---

### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProviders <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProviders" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProviders"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProviders.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSocialIdentityProviders } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProviders: dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProviders = { ... }
```


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedBy <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSocialIdentityProviders } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedBy: dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedBy = { ... }
```


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedBy <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSocialIdentityProviders } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedBy: dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedBy = { ... }
```


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroups <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroups.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSocialIdentityProviders } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroups: dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroups = { ... }
```


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMeta <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMeta.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSocialIdentityProviders } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMeta: dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMeta = { ... }
```


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappings <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappings.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSocialIdentityProviders } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappings: dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappings = { ... }
```


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTags <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTags.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSocialIdentityProviders } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTags: dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSocialIdentityProviders } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSocialIdentityProviders } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedBy">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedBy">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedBy</a>

---


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSocialIdentityProviders } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSocialIdentityProviders } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedBy">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedBy">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSocialIdentityProviders } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSocialIdentityProviders } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroups">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroups;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroups">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroups</a>

---


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSocialIdentityProviders } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSocialIdentityProviders } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSocialIdentityProviders } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMeta">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMeta;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMeta">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMeta</a>

---


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSocialIdentityProviders } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.accessTokenUrl">accessTokenUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.accountLinkingEnabled">accountLinkingEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.adminScope">adminScope</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.authzUrl">authzUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.autoRedirectEnabled">autoRedirectEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.clientCredentialInPayload">clientCredentialInPayload</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.clockSkewInSeconds">clockSkewInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.compartmentOcid">compartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.consumerKey">consumerKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.consumerSecret">consumerSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.deleteInProgress">deleteInProgress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.discoveryUrl">discoveryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.domainOcid">domainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.iconUrl">iconUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.idAttribute">idAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.jitProvAssignedGroups">jitProvAssignedGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.jitProvGroupStaticListEnabled">jitProvGroupStaticListEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.profileUrl">profileUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.redirectUrl">redirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.refreshTokenUrl">refreshTokenUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.registrationEnabled">registrationEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.relayIdpParamMappings">relayIdpParamMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.scope">scope</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.serviceProviderName">serviceProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.showOnLogin">showOnLogin</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.socialJitProvisioningEnabled">socialJitProvisioningEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.tenancyOcid">tenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProviders">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProviders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessTokenUrl`<sup>Required</sup> <a name="accessTokenUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.accessTokenUrl"></a>

```typescript
public readonly accessTokenUrl: string;
```

- *Type:* string

---

##### `accountLinkingEnabled`<sup>Required</sup> <a name="accountLinkingEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.accountLinkingEnabled"></a>

```typescript
public readonly accountLinkingEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `adminScope`<sup>Required</sup> <a name="adminScope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.adminScope"></a>

```typescript
public readonly adminScope: string[];
```

- *Type:* string[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `authzUrl`<sup>Required</sup> <a name="authzUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.authzUrl"></a>

```typescript
public readonly authzUrl: string;
```

- *Type:* string

---

##### `autoRedirectEnabled`<sup>Required</sup> <a name="autoRedirectEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.autoRedirectEnabled"></a>

```typescript
public readonly autoRedirectEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `clientCredentialInPayload`<sup>Required</sup> <a name="clientCredentialInPayload" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.clientCredentialInPayload"></a>

```typescript
public readonly clientCredentialInPayload: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `clockSkewInSeconds`<sup>Required</sup> <a name="clockSkewInSeconds" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.clockSkewInSeconds"></a>

```typescript
public readonly clockSkewInSeconds: number;
```

- *Type:* number

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.compartmentOcid"></a>

```typescript
public readonly compartmentOcid: string;
```

- *Type:* string

---

##### `consumerKey`<sup>Required</sup> <a name="consumerKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.consumerKey"></a>

```typescript
public readonly consumerKey: string;
```

- *Type:* string

---

##### `consumerSecret`<sup>Required</sup> <a name="consumerSecret" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.consumerSecret"></a>

```typescript
public readonly consumerSecret: string;
```

- *Type:* string

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.deleteInProgress"></a>

```typescript
public readonly deleteInProgress: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `discoveryUrl`<sup>Required</sup> <a name="discoveryUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.discoveryUrl"></a>

```typescript
public readonly discoveryUrl: string;
```

- *Type:* string

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.domainOcid"></a>

```typescript
public readonly domainOcid: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `iconUrl`<sup>Required</sup> <a name="iconUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.iconUrl"></a>

```typescript
public readonly iconUrl: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idAttribute`<sup>Required</sup> <a name="idAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.idAttribute"></a>

```typescript
public readonly idAttribute: string;
```

- *Type:* string

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.idcsCreatedBy"></a>

```typescript
public readonly idcsCreatedBy: DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsCreatedByList</a>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.idcsLastModifiedBy"></a>

```typescript
public readonly idcsLastModifiedBy: DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.idcsLastUpgradedInRelease"></a>

```typescript
public readonly idcsLastUpgradedInRelease: string;
```

- *Type:* string

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.idcsPreventedOperations"></a>

```typescript
public readonly idcsPreventedOperations: string[];
```

- *Type:* string[]

---

##### `jitProvAssignedGroups`<sup>Required</sup> <a name="jitProvAssignedGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.jitProvAssignedGroups"></a>

```typescript
public readonly jitProvAssignedGroups: DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersJitProvAssignedGroupsList</a>

---

##### `jitProvGroupStaticListEnabled`<sup>Required</sup> <a name="jitProvGroupStaticListEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.jitProvGroupStaticListEnabled"></a>

```typescript
public readonly jitProvGroupStaticListEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.meta"></a>

```typescript
public readonly meta: DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersMetaList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `profileUrl`<sup>Required</sup> <a name="profileUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.profileUrl"></a>

```typescript
public readonly profileUrl: string;
```

- *Type:* string

---

##### `redirectUrl`<sup>Required</sup> <a name="redirectUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.redirectUrl"></a>

```typescript
public readonly redirectUrl: string;
```

- *Type:* string

---

##### `refreshTokenUrl`<sup>Required</sup> <a name="refreshTokenUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.refreshTokenUrl"></a>

```typescript
public readonly refreshTokenUrl: string;
```

- *Type:* string

---

##### `registrationEnabled`<sup>Required</sup> <a name="registrationEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.registrationEnabled"></a>

```typescript
public readonly registrationEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `relayIdpParamMappings`<sup>Required</sup> <a name="relayIdpParamMappings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.relayIdpParamMappings"></a>

```typescript
public readonly relayIdpParamMappings: DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList</a>

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.scope"></a>

```typescript
public readonly scope: string[];
```

- *Type:* string[]

---

##### `serviceProviderName`<sup>Required</sup> <a name="serviceProviderName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.serviceProviderName"></a>

```typescript
public readonly serviceProviderName: string;
```

- *Type:* string

---

##### `showOnLogin`<sup>Required</sup> <a name="showOnLogin" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.showOnLogin"></a>

```typescript
public readonly showOnLogin: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `socialJitProvisioningEnabled`<sup>Required</sup> <a name="socialJitProvisioningEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.socialJitProvisioningEnabled"></a>

```typescript
public readonly socialJitProvisioningEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.tags"></a>

```typescript
public readonly tags: DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.tenancyOcid"></a>

```typescript
public readonly tenancyOcid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProviders;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProviders">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProviders</a>

---


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSocialIdentityProviders } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSocialIdentityProviders } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.property.relayParamKey">relayParamKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.property.relayParamValue">relayParamValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappings">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `relayParamKey`<sup>Required</sup> <a name="relayParamKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.property.relayParamKey"></a>

```typescript
public readonly relayParamKey: string;
```

- *Type:* string

---

##### `relayParamValue`<sup>Required</sup> <a name="relayParamValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.property.relayParamValue"></a>

```typescript
public readonly relayParamValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappings">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersRelayIdpParamMappings</a>

---


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSocialIdentityProviders } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference <a name="DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSocialIdentityProviders } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTags">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTags;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProviders.DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTags">DataOciIdentityDomainsSocialIdentityProvidersSocialIdentityProvidersTags</a>

---



