# `dataOciIdentityDomainsMyRequestableGroups` Submodule <a name="`dataOciIdentityDomainsMyRequestableGroups` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsMyRequestableGroups <a name="DataOciIdentityDomainsMyRequestableGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_requestable_groups oci_identity_domains_my_requestable_groups}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyRequestableGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups(scope: Construct, id: string, config: DataOciIdentityDomainsMyRequestableGroupsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig">DataOciIdentityDomainsMyRequestableGroupsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig">DataOciIdentityDomainsMyRequestableGroupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.resetMyRequestableGroupCount">resetMyRequestableGroupCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.resetMyRequestableGroupFilter">resetMyRequestableGroupFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.resetSortBy">resetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.resetSortOrder">resetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.resetStartIndex">resetStartIndex</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.resetAuthorization"></a>

```typescript
public resetAuthorization(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMyRequestableGroupCount` <a name="resetMyRequestableGroupCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.resetMyRequestableGroupCount"></a>

```typescript
public resetMyRequestableGroupCount(): void
```

##### `resetMyRequestableGroupFilter` <a name="resetMyRequestableGroupFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.resetMyRequestableGroupFilter"></a>

```typescript
public resetMyRequestableGroupFilter(): void
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.resetResourceTypeSchemaVersion"></a>

```typescript
public resetResourceTypeSchemaVersion(): void
```

##### `resetSortBy` <a name="resetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.resetSortBy"></a>

```typescript
public resetSortBy(): void
```

##### `resetSortOrder` <a name="resetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.resetSortOrder"></a>

```typescript
public resetSortOrder(): void
```

##### `resetStartIndex` <a name="resetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.resetStartIndex"></a>

```typescript
public resetStartIndex(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsMyRequestableGroups resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.isConstruct"></a>

```typescript
import { dataOciIdentityDomainsMyRequestableGroups } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.isTerraformElement"></a>

```typescript
import { dataOciIdentityDomainsMyRequestableGroups } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.isTerraformDataSource"></a>

```typescript
import { dataOciIdentityDomainsMyRequestableGroups } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.generateConfigForImport"></a>

```typescript
import { dataOciIdentityDomainsMyRequestableGroups } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciIdentityDomainsMyRequestableGroups resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityDomainsMyRequestableGroups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityDomainsMyRequestableGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_requestable_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsMyRequestableGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.itemsPerPage">itemsPerPage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.myRequestableGroups">myRequestableGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.totalResults">totalResults</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.authorizationInput">authorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.myRequestableGroupCountInput">myRequestableGroupCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.myRequestableGroupFilterInput">myRequestableGroupFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.sortByInput">sortByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.sortOrderInput">sortOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.startIndexInput">startIndexInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.myRequestableGroupCount">myRequestableGroupCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.myRequestableGroupFilter">myRequestableGroupFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.sortBy">sortBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.sortOrder">sortOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.startIndex">startIndex</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `itemsPerPage`<sup>Required</sup> <a name="itemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.itemsPerPage"></a>

```typescript
public readonly itemsPerPage: number;
```

- *Type:* number

---

##### `myRequestableGroups`<sup>Required</sup> <a name="myRequestableGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.myRequestableGroups"></a>

```typescript
public readonly myRequestableGroups: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList</a>

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `totalResults`<sup>Required</sup> <a name="totalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.totalResults"></a>

```typescript
public readonly totalResults: number;
```

- *Type:* number

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.idcsEndpointInput"></a>

```typescript
public readonly idcsEndpointInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `myRequestableGroupCountInput`<sup>Optional</sup> <a name="myRequestableGroupCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.myRequestableGroupCountInput"></a>

```typescript
public readonly myRequestableGroupCountInput: number;
```

- *Type:* number

---

##### `myRequestableGroupFilterInput`<sup>Optional</sup> <a name="myRequestableGroupFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.myRequestableGroupFilterInput"></a>

```typescript
public readonly myRequestableGroupFilterInput: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.resourceTypeSchemaVersionInput"></a>

```typescript
public readonly resourceTypeSchemaVersionInput: string;
```

- *Type:* string

---

##### `sortByInput`<sup>Optional</sup> <a name="sortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.sortByInput"></a>

```typescript
public readonly sortByInput: string;
```

- *Type:* string

---

##### `sortOrderInput`<sup>Optional</sup> <a name="sortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.sortOrderInput"></a>

```typescript
public readonly sortOrderInput: string;
```

- *Type:* string

---

##### `startIndexInput`<sup>Optional</sup> <a name="startIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.startIndexInput"></a>

```typescript
public readonly startIndexInput: number;
```

- *Type:* number

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `myRequestableGroupCount`<sup>Required</sup> <a name="myRequestableGroupCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.myRequestableGroupCount"></a>

```typescript
public readonly myRequestableGroupCount: number;
```

- *Type:* number

---

##### `myRequestableGroupFilter`<sup>Required</sup> <a name="myRequestableGroupFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.myRequestableGroupFilter"></a>

```typescript
public readonly myRequestableGroupFilter: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `sortBy`<sup>Required</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.sortBy"></a>

```typescript
public readonly sortBy: string;
```

- *Type:* string

---

##### `sortOrder`<sup>Required</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.sortOrder"></a>

```typescript
public readonly sortOrder: string;
```

- *Type:* string

---

##### `startIndex`<sup>Required</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.startIndex"></a>

```typescript
public readonly startIndex: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroups.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsMyRequestableGroupsConfig <a name="DataOciIdentityDomainsMyRequestableGroupsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyRequestableGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyRequestableGroupsConfig: dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_requestable_groups#idcs_endpoint DataOciIdentityDomainsMyRequestableGroups#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.authorization">authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_requestable_groups#authorization DataOciIdentityDomainsMyRequestableGroups#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_requestable_groups#compartment_id DataOciIdentityDomainsMyRequestableGroups#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_requestable_groups#id DataOciIdentityDomainsMyRequestableGroups#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.myRequestableGroupCount">myRequestableGroupCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_requestable_groups#my_requestable_group_count DataOciIdentityDomainsMyRequestableGroups#my_requestable_group_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.myRequestableGroupFilter">myRequestableGroupFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_requestable_groups#my_requestable_group_filter DataOciIdentityDomainsMyRequestableGroups#my_requestable_group_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_requestable_groups#resource_type_schema_version DataOciIdentityDomainsMyRequestableGroups#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.sortBy">sortBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_requestable_groups#sort_by DataOciIdentityDomainsMyRequestableGroups#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.sortOrder">sortOrder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_requestable_groups#sort_order DataOciIdentityDomainsMyRequestableGroups#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.startIndex">startIndex</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_requestable_groups#start_index DataOciIdentityDomainsMyRequestableGroups#start_index}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_requestable_groups#idcs_endpoint DataOciIdentityDomainsMyRequestableGroups#idcs_endpoint}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_requestable_groups#authorization DataOciIdentityDomainsMyRequestableGroups#authorization}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_requestable_groups#compartment_id DataOciIdentityDomainsMyRequestableGroups#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_requestable_groups#id DataOciIdentityDomainsMyRequestableGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `myRequestableGroupCount`<sup>Optional</sup> <a name="myRequestableGroupCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.myRequestableGroupCount"></a>

```typescript
public readonly myRequestableGroupCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_requestable_groups#my_requestable_group_count DataOciIdentityDomainsMyRequestableGroups#my_requestable_group_count}.

---

##### `myRequestableGroupFilter`<sup>Optional</sup> <a name="myRequestableGroupFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.myRequestableGroupFilter"></a>

```typescript
public readonly myRequestableGroupFilter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_requestable_groups#my_requestable_group_filter DataOciIdentityDomainsMyRequestableGroups#my_requestable_group_filter}.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_requestable_groups#resource_type_schema_version DataOciIdentityDomainsMyRequestableGroups#resource_type_schema_version}.

---

##### `sortBy`<sup>Optional</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.sortBy"></a>

```typescript
public readonly sortBy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_requestable_groups#sort_by DataOciIdentityDomainsMyRequestableGroups#sort_by}.

---

##### `sortOrder`<sup>Optional</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.sortOrder"></a>

```typescript
public readonly sortOrder: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_requestable_groups#sort_order DataOciIdentityDomainsMyRequestableGroups#sort_order}.

---

##### `startIndex`<sup>Optional</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsConfig.property.startIndex"></a>

```typescript
public readonly startIndex: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_requestable_groups#start_index DataOciIdentityDomainsMyRequestableGroups#start_index}.

---

### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroups <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroups.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyRequestableGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyRequestableGroupsMyRequestableGroups: dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroups = { ... }
```


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedBy <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyRequestableGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedBy: dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedBy = { ... }
```


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedBy <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyRequestableGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedBy: dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedBy = { ... }
```


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembers <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembers.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyRequestableGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembers: dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembers = { ... }
```


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMeta <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMeta.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyRequestableGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMeta: dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMeta = { ... }
```


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTags <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTags.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyRequestableGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTags: dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTags = { ... }
```


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroup <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroup" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroup"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroup.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyRequestableGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroup: dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroup = { ... }
```


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRoles <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRoles" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRoles"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRoles.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyRequestableGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRoles: dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRoles = { ... }
```


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrants <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrants" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrants"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrants.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyRequestableGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrants: dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrants = { ... }
```


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwners <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwners"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwners.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyRequestableGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwners: dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwners = { ... }
```


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicy <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyRequestableGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicy: dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicy = { ... }
```


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromApp <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromApp" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromApp"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromApp.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyRequestableGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromApp: dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromApp = { ... }
```


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroup <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroup" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroup"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroup.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyRequestableGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroup: dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroup = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyRequestableGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyRequestableGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedBy">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedBy">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedBy</a>

---


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyRequestableGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyRequestableGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedBy">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedBy">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyRequestableGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyRequestableGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyRequestableGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.property.dateAdded">dateAdded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.property.membershipOcid">membershipOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembers">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dateAdded`<sup>Required</sup> <a name="dateAdded" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.property.dateAdded"></a>

```typescript
public readonly dateAdded: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `membershipOcid`<sup>Required</sup> <a name="membershipOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.property.membershipOcid"></a>

```typescript
public readonly membershipOcid: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembers;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembers">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembers</a>

---


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyRequestableGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyRequestableGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMeta">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMeta;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMeta">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMeta</a>

---


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyRequestableGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.compartmentOcid">compartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.deleteInProgress">deleteInProgress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.domainOcid">domainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.members">members</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.nonUniqueDisplayName">nonUniqueDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.tenancyOcid">tenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.urnietfparamsscimschemasoracleidcsextensiongroupGroup">urnietfparamsscimschemasoracleidcsextensiongroupGroup</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.urnietfparamsscimschemasoracleidcsextensionrequestableGroup">urnietfparamsscimschemasoracleidcsextensionrequestableGroup</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroups">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.compartmentOcid"></a>

```typescript
public readonly compartmentOcid: string;
```

- *Type:* string

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.deleteInProgress"></a>

```typescript
public readonly deleteInProgress: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.domainOcid"></a>

```typescript
public readonly domainOcid: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.idcsCreatedBy"></a>

```typescript
public readonly idcsCreatedBy: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsCreatedByList</a>

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.idcsLastModifiedBy"></a>

```typescript
public readonly idcsLastModifiedBy: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.idcsLastUpgradedInRelease"></a>

```typescript
public readonly idcsLastUpgradedInRelease: string;
```

- *Type:* string

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.idcsPreventedOperations"></a>

```typescript
public readonly idcsPreventedOperations: string[];
```

- *Type:* string[]

---

##### `members`<sup>Required</sup> <a name="members" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.members"></a>

```typescript
public readonly members: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMembersList</a>

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.meta"></a>

```typescript
public readonly meta: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsMetaList</a>

---

##### `nonUniqueDisplayName`<sup>Required</sup> <a name="nonUniqueDisplayName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.nonUniqueDisplayName"></a>

```typescript
public readonly nonUniqueDisplayName: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.tags"></a>

```typescript
public readonly tags: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.tenancyOcid"></a>

```typescript
public readonly tenancyOcid: string;
```

- *Type:* string

---

##### `urnietfparamsscimschemasoracleidcsextensiongroupGroup`<sup>Required</sup> <a name="urnietfparamsscimschemasoracleidcsextensiongroupGroup" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.urnietfparamsscimschemasoracleidcsextensiongroupGroup"></a>

```typescript
public readonly urnietfparamsscimschemasoracleidcsextensiongroupGroup: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList</a>

---

##### `urnietfparamsscimschemasoracleidcsextensionrequestableGroup`<sup>Required</sup> <a name="urnietfparamsscimschemasoracleidcsextensionrequestableGroup" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.urnietfparamsscimschemasoracleidcsextensionrequestableGroup"></a>

```typescript
public readonly urnietfparamsscimschemasoracleidcsextensionrequestableGroup: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroups;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroups">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroups</a>

---


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyRequestableGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyRequestableGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTags">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTags;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTags">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsTags</a>

---


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyRequestableGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyRequestableGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.adminRole">adminRole</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.appId">appId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.appName">appName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.legacyGroupName">legacyGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRoles">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRoles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adminRole`<sup>Required</sup> <a name="adminRole" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.adminRole"></a>

```typescript
public readonly adminRole: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `appId`<sup>Required</sup> <a name="appId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

---

##### `appName`<sup>Required</sup> <a name="appName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.appName"></a>

```typescript
public readonly appName: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `legacyGroupName`<sup>Required</sup> <a name="legacyGroupName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.legacyGroupName"></a>

```typescript
public readonly legacyGroupName: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRoles;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRoles">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRoles</a>

---


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyRequestableGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyRequestableGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.property.appId">appId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.property.grantMechanism">grantMechanism</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrants">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrants</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appId`<sup>Required</sup> <a name="appId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

---

##### `grantMechanism`<sup>Required</sup> <a name="grantMechanism" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.property.grantMechanism"></a>

```typescript
public readonly grantMechanism: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrants;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrants">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrants</a>

---


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyRequestableGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyRequestableGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.appRoles">appRoles</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.creationMechanism">creationMechanism</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.grants">grants</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.owners">owners</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.passwordPolicy">passwordPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.syncedFromApp">syncedFromApp</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroup">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appRoles`<sup>Required</sup> <a name="appRoles" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.appRoles"></a>

```typescript
public readonly appRoles: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupAppRolesList</a>

---

##### `creationMechanism`<sup>Required</sup> <a name="creationMechanism" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.creationMechanism"></a>

```typescript
public readonly creationMechanism: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `grants`<sup>Required</sup> <a name="grants" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.grants"></a>

```typescript
public readonly grants: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupGrantsList</a>

---

##### `owners`<sup>Required</sup> <a name="owners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.owners"></a>

```typescript
public readonly owners: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList</a>

---

##### `passwordPolicy`<sup>Required</sup> <a name="passwordPolicy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.passwordPolicy"></a>

```typescript
public readonly passwordPolicy: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList</a>

---

##### `syncedFromApp`<sup>Required</sup> <a name="syncedFromApp" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.syncedFromApp"></a>

```typescript
public readonly syncedFromApp: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroup;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroup">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroup</a>

---


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyRequestableGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyRequestableGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwners">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwners</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwnersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwners;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwners">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupOwners</a>

---


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyRequestableGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyRequestableGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicy">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicy">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupPasswordPolicy</a>

---


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyRequestableGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyRequestableGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromApp">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromApp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromAppOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromApp;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromApp">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensiongroupGroupSyncedFromApp</a>

---


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyRequestableGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference <a name="DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyRequestableGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.property.requestable">requestable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroup">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `requestable`<sup>Required</sup> <a name="requestable" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.property.requestable"></a>

```typescript
public readonly requestable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroup;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyRequestableGroups.DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroup">DataOciIdentityDomainsMyRequestableGroupsMyRequestableGroupsUrnietfparamsscimschemasoracleidcsextensionrequestableGroup</a>

---



