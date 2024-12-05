# `dataOciIdentityDomainsSelfRegistrationProfiles` Submodule <a name="`dataOciIdentityDomainsSelfRegistrationProfiles` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsSelfRegistrationProfiles <a name="DataOciIdentityDomainsSelfRegistrationProfiles" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles oci_identity_domains_self_registration_profiles}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSelfRegistrationProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles(scope: Construct, id: string, config: DataOciIdentityDomainsSelfRegistrationProfilesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig">DataOciIdentityDomainsSelfRegistrationProfilesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig">DataOciIdentityDomainsSelfRegistrationProfilesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetAttributeSets">resetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetSelfRegistrationProfileCount">resetSelfRegistrationProfileCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetSelfRegistrationProfileFilter">resetSelfRegistrationProfileFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetSortBy">resetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetSortOrder">resetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetStartIndex">resetStartIndex</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAttributes` <a name="resetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetAttributeSets` <a name="resetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetAttributeSets"></a>

```typescript
public resetAttributeSets(): void
```

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetAuthorization"></a>

```typescript
public resetAuthorization(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetId"></a>

```typescript
public resetId(): void
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetResourceTypeSchemaVersion"></a>

```typescript
public resetResourceTypeSchemaVersion(): void
```

##### `resetSelfRegistrationProfileCount` <a name="resetSelfRegistrationProfileCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetSelfRegistrationProfileCount"></a>

```typescript
public resetSelfRegistrationProfileCount(): void
```

##### `resetSelfRegistrationProfileFilter` <a name="resetSelfRegistrationProfileFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetSelfRegistrationProfileFilter"></a>

```typescript
public resetSelfRegistrationProfileFilter(): void
```

##### `resetSortBy` <a name="resetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetSortBy"></a>

```typescript
public resetSortBy(): void
```

##### `resetSortOrder` <a name="resetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetSortOrder"></a>

```typescript
public resetSortOrder(): void
```

##### `resetStartIndex` <a name="resetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.resetStartIndex"></a>

```typescript
public resetStartIndex(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsSelfRegistrationProfiles resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.isConstruct"></a>

```typescript
import { dataOciIdentityDomainsSelfRegistrationProfiles } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.isTerraformElement"></a>

```typescript
import { dataOciIdentityDomainsSelfRegistrationProfiles } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.isTerraformDataSource"></a>

```typescript
import { dataOciIdentityDomainsSelfRegistrationProfiles } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.generateConfigForImport"></a>

```typescript
import { dataOciIdentityDomainsSelfRegistrationProfiles } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciIdentityDomainsSelfRegistrationProfiles resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityDomainsSelfRegistrationProfiles to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityDomainsSelfRegistrationProfiles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsSelfRegistrationProfiles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.itemsPerPage">itemsPerPage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.selfRegistrationProfiles">selfRegistrationProfiles</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.totalResults">totalResults</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.attributeSetsInput">attributeSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.attributesInput">attributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.authorizationInput">authorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.selfRegistrationProfileCountInput">selfRegistrationProfileCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.selfRegistrationProfileFilterInput">selfRegistrationProfileFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.sortByInput">sortByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.sortOrderInput">sortOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.startIndexInput">startIndexInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.attributes">attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.selfRegistrationProfileCount">selfRegistrationProfileCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.selfRegistrationProfileFilter">selfRegistrationProfileFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.sortBy">sortBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.sortOrder">sortOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.startIndex">startIndex</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `itemsPerPage`<sup>Required</sup> <a name="itemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.itemsPerPage"></a>

```typescript
public readonly itemsPerPage: number;
```

- *Type:* number

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `selfRegistrationProfiles`<sup>Required</sup> <a name="selfRegistrationProfiles" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.selfRegistrationProfiles"></a>

```typescript
public readonly selfRegistrationProfiles: DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList</a>

---

##### `totalResults`<sup>Required</sup> <a name="totalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.totalResults"></a>

```typescript
public readonly totalResults: number;
```

- *Type:* number

---

##### `attributeSetsInput`<sup>Optional</sup> <a name="attributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.attributeSetsInput"></a>

```typescript
public readonly attributeSetsInput: string[];
```

- *Type:* string[]

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.attributesInput"></a>

```typescript
public readonly attributesInput: string;
```

- *Type:* string

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.idcsEndpointInput"></a>

```typescript
public readonly idcsEndpointInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.resourceTypeSchemaVersionInput"></a>

```typescript
public readonly resourceTypeSchemaVersionInput: string;
```

- *Type:* string

---

##### `selfRegistrationProfileCountInput`<sup>Optional</sup> <a name="selfRegistrationProfileCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.selfRegistrationProfileCountInput"></a>

```typescript
public readonly selfRegistrationProfileCountInput: number;
```

- *Type:* number

---

##### `selfRegistrationProfileFilterInput`<sup>Optional</sup> <a name="selfRegistrationProfileFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.selfRegistrationProfileFilterInput"></a>

```typescript
public readonly selfRegistrationProfileFilterInput: string;
```

- *Type:* string

---

##### `sortByInput`<sup>Optional</sup> <a name="sortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.sortByInput"></a>

```typescript
public readonly sortByInput: string;
```

- *Type:* string

---

##### `sortOrderInput`<sup>Optional</sup> <a name="sortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.sortOrderInput"></a>

```typescript
public readonly sortOrderInput: string;
```

- *Type:* string

---

##### `startIndexInput`<sup>Optional</sup> <a name="startIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.startIndexInput"></a>

```typescript
public readonly startIndexInput: number;
```

- *Type:* number

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `selfRegistrationProfileCount`<sup>Required</sup> <a name="selfRegistrationProfileCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.selfRegistrationProfileCount"></a>

```typescript
public readonly selfRegistrationProfileCount: number;
```

- *Type:* number

---

##### `selfRegistrationProfileFilter`<sup>Required</sup> <a name="selfRegistrationProfileFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.selfRegistrationProfileFilter"></a>

```typescript
public readonly selfRegistrationProfileFilter: string;
```

- *Type:* string

---

##### `sortBy`<sup>Required</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.sortBy"></a>

```typescript
public readonly sortBy: string;
```

- *Type:* string

---

##### `sortOrder`<sup>Required</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.sortOrder"></a>

```typescript
public readonly sortOrder: string;
```

- *Type:* string

---

##### `startIndex`<sup>Required</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.startIndex"></a>

```typescript
public readonly startIndex: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfiles.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsSelfRegistrationProfilesConfig <a name="DataOciIdentityDomainsSelfRegistrationProfilesConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSelfRegistrationProfiles } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsSelfRegistrationProfilesConfig: dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#idcs_endpoint DataOciIdentityDomainsSelfRegistrationProfiles#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.attributes">attributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#attributes DataOciIdentityDomainsSelfRegistrationProfiles#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#attribute_sets DataOciIdentityDomainsSelfRegistrationProfiles#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.authorization">authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#authorization DataOciIdentityDomainsSelfRegistrationProfiles#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#compartment_id DataOciIdentityDomainsSelfRegistrationProfiles#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#id DataOciIdentityDomainsSelfRegistrationProfiles#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#resource_type_schema_version DataOciIdentityDomainsSelfRegistrationProfiles#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.selfRegistrationProfileCount">selfRegistrationProfileCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#self_registration_profile_count DataOciIdentityDomainsSelfRegistrationProfiles#self_registration_profile_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.selfRegistrationProfileFilter">selfRegistrationProfileFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#self_registration_profile_filter DataOciIdentityDomainsSelfRegistrationProfiles#self_registration_profile_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.sortBy">sortBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#sort_by DataOciIdentityDomainsSelfRegistrationProfiles#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.sortOrder">sortOrder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#sort_order DataOciIdentityDomainsSelfRegistrationProfiles#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.startIndex">startIndex</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#start_index DataOciIdentityDomainsSelfRegistrationProfiles#start_index}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#idcs_endpoint DataOciIdentityDomainsSelfRegistrationProfiles#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#attributes DataOciIdentityDomainsSelfRegistrationProfiles#attributes}.

---

##### `attributeSets`<sup>Optional</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#attribute_sets DataOciIdentityDomainsSelfRegistrationProfiles#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#authorization DataOciIdentityDomainsSelfRegistrationProfiles#authorization}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#compartment_id DataOciIdentityDomainsSelfRegistrationProfiles#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#id DataOciIdentityDomainsSelfRegistrationProfiles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#resource_type_schema_version DataOciIdentityDomainsSelfRegistrationProfiles#resource_type_schema_version}.

---

##### `selfRegistrationProfileCount`<sup>Optional</sup> <a name="selfRegistrationProfileCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.selfRegistrationProfileCount"></a>

```typescript
public readonly selfRegistrationProfileCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#self_registration_profile_count DataOciIdentityDomainsSelfRegistrationProfiles#self_registration_profile_count}.

---

##### `selfRegistrationProfileFilter`<sup>Optional</sup> <a name="selfRegistrationProfileFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.selfRegistrationProfileFilter"></a>

```typescript
public readonly selfRegistrationProfileFilter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#self_registration_profile_filter DataOciIdentityDomainsSelfRegistrationProfiles#self_registration_profile_filter}.

---

##### `sortBy`<sup>Optional</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.sortBy"></a>

```typescript
public readonly sortBy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#sort_by DataOciIdentityDomainsSelfRegistrationProfiles#sort_by}.

---

##### `sortOrder`<sup>Optional</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.sortOrder"></a>

```typescript
public readonly sortOrder: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#sort_order DataOciIdentityDomainsSelfRegistrationProfiles#sort_order}.

---

##### `startIndex`<sup>Optional</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesConfig.property.startIndex"></a>

```typescript
public readonly startIndex: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profiles#start_index DataOciIdentityDomainsSelfRegistrationProfiles#start_index}.

---

### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfiles <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfiles" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfiles"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfiles.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSelfRegistrationProfiles } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfiles: dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfiles = { ... }
```


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitText <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitText" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitText"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitText.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSelfRegistrationProfiles } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitText: dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitText = { ... }
```


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentText <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentText" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentText"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentText.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSelfRegistrationProfiles } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentText: dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentText = { ... }
```


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroups <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroups.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSelfRegistrationProfiles } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroups: dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroups = { ... }
```


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayName <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayName"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayName.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSelfRegistrationProfiles } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayName: dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayName = { ... }
```


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplate <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplate" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplate"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplate.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSelfRegistrationProfiles } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplate: dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplate = { ... }
```


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterText <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterText" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterText"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterText.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSelfRegistrationProfiles } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterText: dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterText = { ... }
```


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderText <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderText" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderText"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderText.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSelfRegistrationProfiles } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderText: dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderText = { ... }
```


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedBy <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSelfRegistrationProfiles } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedBy: dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedBy = { ... }
```


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedBy <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSelfRegistrationProfiles } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedBy: dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedBy = { ... }
```


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMeta <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMeta.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSelfRegistrationProfiles } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMeta: dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMeta = { ... }
```


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTags <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTags.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSelfRegistrationProfiles } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTags: dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTags = { ... }
```


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributes <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributes.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSelfRegistrationProfiles } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributes: dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributes = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSelfRegistrationProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSelfRegistrationProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.property.default">default</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.property.locale">locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitText">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitText</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.property.default"></a>

```typescript
public readonly default: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitText;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitText">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitText</a>

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSelfRegistrationProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSelfRegistrationProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.property.default">default</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.property.locale">locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentText">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentText</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.property.default"></a>

```typescript
public readonly default: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentText;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentText">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentText</a>

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSelfRegistrationProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSelfRegistrationProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroups">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroups;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroups">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroups</a>

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSelfRegistrationProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSelfRegistrationProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.property.default">default</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.property.locale">locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayName">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayName</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.property.default"></a>

```typescript
public readonly default: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayName;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayName">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayName</a>

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSelfRegistrationProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSelfRegistrationProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplate">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplate;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplate">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplate</a>

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSelfRegistrationProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSelfRegistrationProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.property.default">default</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.property.locale">locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterText">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterText</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.property.default"></a>

```typescript
public readonly default: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterText;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterText">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterText</a>

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSelfRegistrationProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSelfRegistrationProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.property.default">default</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.property.locale">locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderText">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderText</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.property.default"></a>

```typescript
public readonly default: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderText;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderText">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderText</a>

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSelfRegistrationProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSelfRegistrationProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedBy">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedBy">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedBy</a>

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSelfRegistrationProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSelfRegistrationProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedBy">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedBy">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSelfRegistrationProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSelfRegistrationProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSelfRegistrationProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMeta">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMeta;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMeta">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMeta</a>

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSelfRegistrationProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.activationEmailRequired">activationEmailRequired</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.active">active</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.afterSubmitText">afterSubmitText</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.allowedEmailDomains">allowedEmailDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.attributes">attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.compartmentOcid">compartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.consentText">consentText</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.consentTextPresent">consentTextPresent</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.defaultGroups">defaultGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.deleteInProgress">deleteInProgress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.disallowedEmailDomains">disallowedEmailDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.displayName">displayName</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.domainOcid">domainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.emailTemplate">emailTemplate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.footerLogo">footerLogo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.footerText">footerText</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.headerLogo">headerLogo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.headerText">headerText</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.numberOfDaysRedirectUrlIsValid">numberOfDaysRedirectUrlIsValid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.redirectUrl">redirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.showOnLoginPage">showOnLoginPage</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.tenancyOcid">tenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.userAttributes">userAttributes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfiles">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfiles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activationEmailRequired`<sup>Required</sup> <a name="activationEmailRequired" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.activationEmailRequired"></a>

```typescript
public readonly activationEmailRequired: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `active`<sup>Required</sup> <a name="active" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.active"></a>

```typescript
public readonly active: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `afterSubmitText`<sup>Required</sup> <a name="afterSubmitText" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.afterSubmitText"></a>

```typescript
public readonly afterSubmitText: DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesAfterSubmitTextList</a>

---

##### `allowedEmailDomains`<sup>Required</sup> <a name="allowedEmailDomains" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.allowedEmailDomains"></a>

```typescript
public readonly allowedEmailDomains: string[];
```

- *Type:* string[]

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.compartmentOcid"></a>

```typescript
public readonly compartmentOcid: string;
```

- *Type:* string

---

##### `consentText`<sup>Required</sup> <a name="consentText" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.consentText"></a>

```typescript
public readonly consentText: DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesConsentTextList</a>

---

##### `consentTextPresent`<sup>Required</sup> <a name="consentTextPresent" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.consentTextPresent"></a>

```typescript
public readonly consentTextPresent: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `defaultGroups`<sup>Required</sup> <a name="defaultGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.defaultGroups"></a>

```typescript
public readonly defaultGroups: DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDefaultGroupsList</a>

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.deleteInProgress"></a>

```typescript
public readonly deleteInProgress: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `disallowedEmailDomains`<sup>Required</sup> <a name="disallowedEmailDomains" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.disallowedEmailDomains"></a>

```typescript
public readonly disallowedEmailDomains: string[];
```

- *Type:* string[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesDisplayNameList</a>

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.domainOcid"></a>

```typescript
public readonly domainOcid: string;
```

- *Type:* string

---

##### `emailTemplate`<sup>Required</sup> <a name="emailTemplate" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.emailTemplate"></a>

```typescript
public readonly emailTemplate: DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesEmailTemplateList</a>

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `footerLogo`<sup>Required</sup> <a name="footerLogo" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.footerLogo"></a>

```typescript
public readonly footerLogo: string;
```

- *Type:* string

---

##### `footerText`<sup>Required</sup> <a name="footerText" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.footerText"></a>

```typescript
public readonly footerText: DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesFooterTextList</a>

---

##### `headerLogo`<sup>Required</sup> <a name="headerLogo" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.headerLogo"></a>

```typescript
public readonly headerLogo: string;
```

- *Type:* string

---

##### `headerText`<sup>Required</sup> <a name="headerText" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.headerText"></a>

```typescript
public readonly headerText: DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesHeaderTextList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.idcsCreatedBy"></a>

```typescript
public readonly idcsCreatedBy: DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsCreatedByList</a>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.idcsLastModifiedBy"></a>

```typescript
public readonly idcsLastModifiedBy: DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.idcsLastUpgradedInRelease"></a>

```typescript
public readonly idcsLastUpgradedInRelease: string;
```

- *Type:* string

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.idcsPreventedOperations"></a>

```typescript
public readonly idcsPreventedOperations: string[];
```

- *Type:* string[]

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.meta"></a>

```typescript
public readonly meta: DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesMetaList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `numberOfDaysRedirectUrlIsValid`<sup>Required</sup> <a name="numberOfDaysRedirectUrlIsValid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.numberOfDaysRedirectUrlIsValid"></a>

```typescript
public readonly numberOfDaysRedirectUrlIsValid: number;
```

- *Type:* number

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `redirectUrl`<sup>Required</sup> <a name="redirectUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.redirectUrl"></a>

```typescript
public readonly redirectUrl: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `showOnLoginPage`<sup>Required</sup> <a name="showOnLoginPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.showOnLoginPage"></a>

```typescript
public readonly showOnLoginPage: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.tags"></a>

```typescript
public readonly tags: DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.tenancyOcid"></a>

```typescript
public readonly tenancyOcid: string;
```

- *Type:* string

---

##### `userAttributes`<sup>Required</sup> <a name="userAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.userAttributes"></a>

```typescript
public readonly userAttributes: DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfiles;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfiles">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfiles</a>

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSelfRegistrationProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSelfRegistrationProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTags">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTags;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTags">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesTags</a>

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSelfRegistrationProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsSelfRegistrationProfiles } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.deletable">deletable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.fullyQualifiedAttributeName">fullyQualifiedAttributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.metadata">metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.seqNumber">seqNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributes">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deletable`<sup>Required</sup> <a name="deletable" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.deletable"></a>

```typescript
public readonly deletable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `fullyQualifiedAttributeName`<sup>Required</sup> <a name="fullyQualifiedAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.fullyQualifiedAttributeName"></a>

```typescript
public readonly fullyQualifiedAttributeName: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

---

##### `seqNumber`<sup>Required</sup> <a name="seqNumber" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.seqNumber"></a>

```typescript
public readonly seqNumber: number;
```

- *Type:* number

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributes;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfiles.DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributes">DataOciIdentityDomainsSelfRegistrationProfilesSelfRegistrationProfilesUserAttributes</a>

---



