# `dataOciFleetAppsManagementAnnouncements` Submodule <a name="`dataOciFleetAppsManagementAnnouncements` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFleetAppsManagementAnnouncements <a name="DataOciFleetAppsManagementAnnouncements" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_announcements oci_fleet_apps_management_announcements}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementAnnouncements } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements(scope: Construct, id: string, config?: DataOciFleetAppsManagementAnnouncementsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsConfig">DataOciFleetAppsManagementAnnouncementsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsConfig">DataOciFleetAppsManagementAnnouncementsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.resetSummaryContains">resetSummaryContains</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciFleetAppsManagementAnnouncementsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilter">DataOciFleetAppsManagementAnnouncementsFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSummaryContains` <a name="resetSummaryContains" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.resetSummaryContains"></a>

```typescript
public resetSummaryContains(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFleetAppsManagementAnnouncements resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.isConstruct"></a>

```typescript
import { dataOciFleetAppsManagementAnnouncements } from 'rhizo-co-terraform-provider-oci'

dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.isTerraformElement"></a>

```typescript
import { dataOciFleetAppsManagementAnnouncements } from 'rhizo-co-terraform-provider-oci'

dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.isTerraformDataSource"></a>

```typescript
import { dataOciFleetAppsManagementAnnouncements } from 'rhizo-co-terraform-provider-oci'

dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.generateConfigForImport"></a>

```typescript
import { dataOciFleetAppsManagementAnnouncements } from 'rhizo-co-terraform-provider-oci'

dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciFleetAppsManagementAnnouncements resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciFleetAppsManagementAnnouncements to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciFleetAppsManagementAnnouncements that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_announcements#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFleetAppsManagementAnnouncements to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.property.announcementCollection">announcementCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionList">DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterList">DataOciFleetAppsManagementAnnouncementsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilter">DataOciFleetAppsManagementAnnouncementsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.property.summaryContainsInput">summaryContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.property.summaryContains">summaryContains</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `announcementCollection`<sup>Required</sup> <a name="announcementCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.property.announcementCollection"></a>

```typescript
public readonly announcementCollection: DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionList">DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.property.filter"></a>

```typescript
public readonly filter: DataOciFleetAppsManagementAnnouncementsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterList">DataOciFleetAppsManagementAnnouncementsFilterList</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciFleetAppsManagementAnnouncementsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilter">DataOciFleetAppsManagementAnnouncementsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `summaryContainsInput`<sup>Optional</sup> <a name="summaryContainsInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.property.summaryContainsInput"></a>

```typescript
public readonly summaryContainsInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `summaryContains`<sup>Required</sup> <a name="summaryContains" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.property.summaryContains"></a>

```typescript
public readonly summaryContains: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncements.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFleetAppsManagementAnnouncementsAnnouncementCollection <a name="DataOciFleetAppsManagementAnnouncementsAnnouncementCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollection.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementAnnouncements } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementAnnouncementsAnnouncementCollection: dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollection = { ... }
```


### DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItems <a name="DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItems.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementAnnouncements } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItems: dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItems = { ... }
```


### DataOciFleetAppsManagementAnnouncementsConfig <a name="DataOciFleetAppsManagementAnnouncementsConfig" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsConfig.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementAnnouncements } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementAnnouncementsConfig: dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_announcements#display_name DataOciFleetAppsManagementAnnouncements#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilter">DataOciFleetAppsManagementAnnouncementsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_announcements#id DataOciFleetAppsManagementAnnouncements#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsConfig.property.summaryContains">summaryContains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_announcements#summary_contains DataOciFleetAppsManagementAnnouncements#summary_contains}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_announcements#display_name DataOciFleetAppsManagementAnnouncements#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciFleetAppsManagementAnnouncementsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilter">DataOciFleetAppsManagementAnnouncementsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_announcements#filter DataOciFleetAppsManagementAnnouncements#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_announcements#id DataOciFleetAppsManagementAnnouncements#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `summaryContains`<sup>Optional</sup> <a name="summaryContains" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsConfig.property.summaryContains"></a>

```typescript
public readonly summaryContains: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_announcements#summary_contains DataOciFleetAppsManagementAnnouncements#summary_contains}.

---

### DataOciFleetAppsManagementAnnouncementsFilter <a name="DataOciFleetAppsManagementAnnouncementsFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilter.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementAnnouncements } from 'rhizo-co-terraform-provider-oci'

const dataOciFleetAppsManagementAnnouncementsFilter: dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_announcements#name DataOciFleetAppsManagementAnnouncements#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_announcements#values DataOciFleetAppsManagementAnnouncements#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_announcements#regex DataOciFleetAppsManagementAnnouncements#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_announcements#name DataOciFleetAppsManagementAnnouncements#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_announcements#values DataOciFleetAppsManagementAnnouncements#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_announcements#regex DataOciFleetAppsManagementAnnouncements#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsList <a name="DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementAnnouncements } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference <a name="DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementAnnouncements } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.property.announcementEnd">announcementEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.property.announcementStart">announcementStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.property.details">details</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.property.resourceRegion">resourceRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.property.summary">summary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItems">DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `announcementEnd`<sup>Required</sup> <a name="announcementEnd" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.property.announcementEnd"></a>

```typescript
public readonly announcementEnd: string;
```

- *Type:* string

---

##### `announcementStart`<sup>Required</sup> <a name="announcementStart" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.property.announcementStart"></a>

```typescript
public readonly announcementStart: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.property.details"></a>

```typescript
public readonly details: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `resourceRegion`<sup>Required</sup> <a name="resourceRegion" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.property.resourceRegion"></a>

```typescript
public readonly resourceRegion: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `summary`<sup>Required</sup> <a name="summary" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItems">DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItems</a>

---


### DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionList <a name="DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementAnnouncements } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference <a name="DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementAnnouncements } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsList">DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollection">DataOciFleetAppsManagementAnnouncementsAnnouncementCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsList">DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFleetAppsManagementAnnouncementsAnnouncementCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsAnnouncementCollection">DataOciFleetAppsManagementAnnouncementsAnnouncementCollection</a>

---


### DataOciFleetAppsManagementAnnouncementsFilterList <a name="DataOciFleetAppsManagementAnnouncementsFilterList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterList.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementAnnouncements } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterList.get"></a>

```typescript
public get(index: number): DataOciFleetAppsManagementAnnouncementsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilter">DataOciFleetAppsManagementAnnouncementsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciFleetAppsManagementAnnouncementsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilter">DataOciFleetAppsManagementAnnouncementsFilter</a>[]

---


### DataOciFleetAppsManagementAnnouncementsFilterOutputReference <a name="DataOciFleetAppsManagementAnnouncementsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciFleetAppsManagementAnnouncements } from 'rhizo-co-terraform-provider-oci'

new dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilter">DataOciFleetAppsManagementAnnouncementsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciFleetAppsManagementAnnouncementsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementAnnouncements.DataOciFleetAppsManagementAnnouncementsFilter">DataOciFleetAppsManagementAnnouncementsFilter</a>

---



