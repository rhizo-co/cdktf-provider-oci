# `dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport` Submodule <a name="`dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_audit_log_report oci_delegate_access_control_delegated_resource_access_request_audit_log_report}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.Initializer"></a>

```typescript
import { dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport } from 'rhizo-co-terraform-provider-oci'

new dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport(scope: Construct, id: string, config: DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig">DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig">DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.resetIsProcessTreeEnabled">resetIsProcessTreeEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsProcessTreeEnabled` <a name="resetIsProcessTreeEnabled" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.resetIsProcessTreeEnabled"></a>

```typescript
public resetIsProcessTreeEnabled(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.isConstruct"></a>

```typescript
import { dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport } from 'rhizo-co-terraform-provider-oci'

dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.isTerraformElement"></a>

```typescript
import { dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport } from 'rhizo-co-terraform-provider-oci'

dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.isTerraformDataSource"></a>

```typescript
import { dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport } from 'rhizo-co-terraform-provider-oci'

dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.generateConfigForImport"></a>

```typescript
import { dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport } from 'rhizo-co-terraform-provider-oci'

dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_audit_log_report#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.auditReportStatus">auditReportStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.processTree">processTree</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.report">report</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.timeReportGenerated">timeReportGenerated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.delegatedResourceAccessRequestIdInput">delegatedResourceAccessRequestIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.isProcessTreeEnabledInput">isProcessTreeEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.delegatedResourceAccessRequestId">delegatedResourceAccessRequestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.isProcessTreeEnabled">isProcessTreeEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `auditReportStatus`<sup>Required</sup> <a name="auditReportStatus" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.auditReportStatus"></a>

```typescript
public readonly auditReportStatus: string;
```

- *Type:* string

---

##### `processTree`<sup>Required</sup> <a name="processTree" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.processTree"></a>

```typescript
public readonly processTree: string;
```

- *Type:* string

---

##### `report`<sup>Required</sup> <a name="report" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.report"></a>

```typescript
public readonly report: string;
```

- *Type:* string

---

##### `timeReportGenerated`<sup>Required</sup> <a name="timeReportGenerated" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.timeReportGenerated"></a>

```typescript
public readonly timeReportGenerated: string;
```

- *Type:* string

---

##### `delegatedResourceAccessRequestIdInput`<sup>Optional</sup> <a name="delegatedResourceAccessRequestIdInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.delegatedResourceAccessRequestIdInput"></a>

```typescript
public readonly delegatedResourceAccessRequestIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isProcessTreeEnabledInput`<sup>Optional</sup> <a name="isProcessTreeEnabledInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.isProcessTreeEnabledInput"></a>

```typescript
public readonly isProcessTreeEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `delegatedResourceAccessRequestId`<sup>Required</sup> <a name="delegatedResourceAccessRequestId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.delegatedResourceAccessRequestId"></a>

```typescript
public readonly delegatedResourceAccessRequestId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isProcessTreeEnabled`<sup>Required</sup> <a name="isProcessTreeEnabled" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.isProcessTreeEnabled"></a>

```typescript
public readonly isProcessTreeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.Initializer"></a>

```typescript
import { dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport } from 'rhizo-co-terraform-provider-oci'

const dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig: dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.delegatedResourceAccessRequestId">delegatedResourceAccessRequestId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_audit_log_report#delegated_resource_access_request_id DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport#delegated_resource_access_request_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_audit_log_report#id DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.isProcessTreeEnabled">isProcessTreeEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_audit_log_report#is_process_tree_enabled DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport#is_process_tree_enabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `delegatedResourceAccessRequestId`<sup>Required</sup> <a name="delegatedResourceAccessRequestId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.delegatedResourceAccessRequestId"></a>

```typescript
public readonly delegatedResourceAccessRequestId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_audit_log_report#delegated_resource_access_request_id DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport#delegated_resource_access_request_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_audit_log_report#id DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isProcessTreeEnabled`<sup>Optional</sup> <a name="isProcessTreeEnabled" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport.DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig.property.isProcessTreeEnabled"></a>

```typescript
public readonly isProcessTreeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_audit_log_report#is_process_tree_enabled DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport#is_process_tree_enabled}.

---



